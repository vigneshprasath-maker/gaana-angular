import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private http: HttpClient) { }

  getAllTopcharts() {
    return this.http.get('https://djn17gpcua.execute-api.us-east-1.amazonaws.com/dev/top-charts');

  }
  allToppicks() {
    return this.http.get('https://djn17gpcua.execute-api.us-east-1.amazonaws.com/dev/top-picks');
  }
  allTrendingsongs() {
    return this.http.get('https://djn17gpcua.execute-api.us-east-1.amazonaws.com/dev/top-trending');
  }
}
