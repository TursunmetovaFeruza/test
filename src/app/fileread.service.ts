import { Injectable } from '@angular/core';
import precipitation from './precipitation.json';
import temperature from './temperature.json';

@Injectable({
  providedIn: 'root'
})

export class FilereadService {
  public prec: any = precipitation;
  public temp: any = temperature;

  constructor() { }

  getPeriod(type, startTime, finishTime): any {
    let data; 
    switch (type) {
      case 'precipitation':
        data = this.prec.filter(item =>  startTime <=new Date(item.t).getFullYear() && new Date(item.t).getFullYear() <= finishTime)
        break;
      case 'temperature':
        data = this.temp.filter(item =>  startTime <=new Date(item.t).getFullYear() && new Date(item.t).getFullYear() <= finishTime)
        break;
      default:
        data = []
        break;
    }
    return data;
  }
}
