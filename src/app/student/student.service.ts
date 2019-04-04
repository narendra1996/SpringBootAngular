import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  fetchUserDetails(Id: string) {
    let requestParam = new HttpParams();
    requestParam = requestParam.set('id', Id);
    return this.http.get('http://localhost:9090/SpringBoot/course/getUserDetail', { params: requestParam });
  }
}
