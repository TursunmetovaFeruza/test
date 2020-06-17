import { Component, OnInit } from '@angular/core';
import precipitation from './precipitation.json';
import temperature from './temperature.json';
import { FilereadService } from '../app/fileread.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: any;
  public buttons = ['precipitation', 'temperature'];
  public options;
  public startTime = 1881; finishTime = 2006;
  public selected;
  public years;

  constructor(
    private fileServ: FilereadService,
  ) { }

  ngOnInit() {
    this.years = Array(126).fill((2007 - 126)).map((x, i) => x + i);
    this.selected = this.buttons[0];
    this.getValue(this.selected);
    this.options = {
      legend: {
        display: false
      },
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

  start(year) {
    this.startTime = parseInt(year);
    this.getValue(this.selected);
  }

  finish(year) {
    this.finishTime = parseInt(year);
    this.getValue(this.selected);
  }

  getValue(item) {
    this.selected = item;
    this.data = [];
    let data = this.fileServ.getPeriod(item, this.startTime, this.finishTime);
    this.data = {
      labels: data.map(el => el.t),
      datasets: [
        {
          data: data.map(el => el.v)
        }
      ]
    }

  }

}

