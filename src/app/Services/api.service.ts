import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  baseUrl: any = "http://192.168.29.107:5700/admin";

  Login(data: any) {
    return this.http.post(this.baseUrl + '/login', data)
  }

  setPassword(data: any) {
    return this.http.put(this.baseUrl + '/updatePassword', data)
  }



}
