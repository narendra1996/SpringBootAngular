import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient) { }

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

  loginUser(loginForm: FormGroup) {
    const jsonBody = {
      email: loginForm.controls.email.value,
      password: loginForm.controls.password.value
    };
    return this.http.post('http://localhost:9090/SpringBoot/course/login', jsonBody);
  }

  logoutUser() {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
      return;
    } else {
      return;
    }
  }

  SendRecoveryEmail(resetForm: FormGroup) {
    let requestParam = new HttpParams();
    requestParam = requestParam.set('emailId', resetForm.controls.email.value);
    return this.http.post('http://localhost:9090/SpringBoot/course/resetpassword', requestParam);
  }

  ChangePassword(passwordChangeFrom: FormGroup, emailId: any) {
    const jsonBody = {
      email: emailId,
      resetPassword: passwordChangeFrom.controls.recoveryPassword.value,
      password: passwordChangeFrom.controls.newPassword.value,
    };
    return this.http.post('http://localhost:9090/SpringBoot/course/changepassword', jsonBody);
  }
}
