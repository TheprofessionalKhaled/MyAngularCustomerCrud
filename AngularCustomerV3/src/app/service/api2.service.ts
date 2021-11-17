import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from "rxjs/index";
import { Complaints } from '../common/complaints';
@Injectable({
  providedIn: 'root'
})
export class Api2Service {

  baseUrl : string = 'http://localhost:8080/users/';

  constructor(private http:HttpClient) { }
  

  
  getComplaintById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + id);
  }

  createComplaint(complaint: Complaints): Observable<Object> {
    return this.http.post<Object>(this.baseUrl, complaint);
  }


}