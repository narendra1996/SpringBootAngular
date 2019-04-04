import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomePageService } from '../home-page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;

  alertType: string;
  showAlert: boolean;
  closeAlert: boolean;
  alertMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private homePageService: HomePageService) { }

  ngOnInit() {
    this.homePageService.logoutUser();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }
    this.homePageService.loginUser(this.loginForm).subscribe(success => {
      // console.log(success);
      localStorage.setItem('currentUser', 'narendra');
      this.routetoCourse(success);
    }, error => {
      // console.log(error);
      this.showErrMsg(error);
    });
    console.log(status);
  }

  routetoCourse(success: any) {
    // this.storeData.storeData(success.data);
    if (success.accountType === 'S') {
      this.router.navigate(['/student/home', { id: success.id }]);
    } else {
      this.router.navigate(['/instructor/home', { id: success.id }]);
    }
  }

  showErrMsg(error: any) {
    this.loading = false;
    this.showAlert = true;
    this.alertType = 'danger';
    this.alertMessage = error.error.message;
    setTimeout(() => this.showAlert = false, 3000);

  }
}
