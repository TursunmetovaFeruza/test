import { Component } from '@angular/core';
import precipitation from './precipitation.json';
import temperature from './temperature.json';
import { FilereadService } from '../app/fileread.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  data: any;

  prec: any = precipitation;

  temp: any = temperature;
  options
constructor (
  private fileServ : FilereadService,
){
  this.fileServ.getPeriod('d','f','f').subscribe(res=>{
    console.log(res)
  });
  let date = this.temp.map(el=>el.t)
  let datas = this.temp.map(el=>el.v)
  this.data = {
    labels:date,
    datasets: [
        {
            label: 'First Dataset',
            data: datas
        }
    ]
}
this.options = {
  animation: {
    duration: 0
  },
  hover: {
    animationDuration: 0 
  },
  responsiveAnimationDuration: 0, 
  elements: {
    line: {
      tension: 0 
    }
  }
}
}
  buttons = ['precipitation','temperature']
  getValue(item){
    console.log(item)
    

  }
 
}

