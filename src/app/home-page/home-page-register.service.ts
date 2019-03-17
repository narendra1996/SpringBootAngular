import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HomePageRegisterService {

  constructor(private http: HttpClient) { }
  status: boolean;

  registerUser(registerForm: FormGroup) {
    const jsonBody = {
      firstName: registerForm.controls.firstName.value,
      lastName: registerForm.controls.lastName.value,
      email: registerForm.controls.email.value,
      accountType: registerForm.controls.accountType.value,
      password: registerForm.controls.password.value,
    };
    return this.http.post('http://localhost:9090/SpringBoot/course/register', jsonBody);
  }


}
