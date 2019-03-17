import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class HomePageLoginService {

  constructor(private http: HttpClient) { }

  loginUser(loginForm: FormGroup) {
    const jsonBody = {
      email: loginForm.controls.email.value,
      password: loginForm.controls.password.value
    };
    return this.http.post('http://localhost:9090/SpringBoot/course/login', jsonBody);
  }


}
