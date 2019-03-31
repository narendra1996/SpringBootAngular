import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient) { }

  SendRecoveryEmail(resetForm: FormGroup) {
    // const jsonBody = {
    //   email: resetForm.controls.email.value
    // };
    let requestParam = new HttpParams();
    requestParam = requestParam.set('emailId', resetForm.controls.email.value);
    return this.http.post('http://localhost:9090/SpringBoot/course/resetpassword', requestParam);
  }
}
