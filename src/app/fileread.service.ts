import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let qs = require('qs');

@Injectable({
  providedIn: 'root'
})

export class FilereadService {

  constructor(
    private http: HttpClient,
  ) { }
  getAllData(type) {

  }

  getPeriod(type, startTime,finishTime): any {

    const query = qs.stringify({
      type, startTime,finishTime
    });

    return this.http.get<any>(`/api/file/getPeriod?${query}`);
  }
  // getPeriod(type, startTime,finishTime) {
  //   console.log(type, startTime,finishTime)
  // }
}
