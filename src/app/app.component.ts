import { Component } from '@angular/core';
import { FilereadService } from '../app/fileread.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  data: any;
constructor (
  private fileServ : FilereadService,
){
  this.fileServ.getPeriod('d','f','f').subscribe(res=>{
    console.log(res)
  });
  this.data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
}
}
  buttons = ['precipitation','temperature']
  getValue(item){
    console.log(item)
    

  }
 
}
