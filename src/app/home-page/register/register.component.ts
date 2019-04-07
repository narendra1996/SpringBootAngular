import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomePageService } from '../home-page.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      accountType: ['', Validators.required],
      password: ['', [Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14),
        Validators.pattern(/(((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%_])).(?!.*\s)).{8,14}/)
      ]]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.registerForm.invalid) {
      this.loading = false;
      return;
    }
    this.homePageService.registerUser(this.registerForm).subscribe(success => {
        console.log(success);
        this.routeToLogin();
        }, error => {
          console.log(error);
          this.showErrorMsg(error);
        });

  }

  routeToLogin() {
    this.showAlert = true;
    this.alertMessage = 'User succesfully Registered Redirecting to Login Page';
    this.alertType = 'success';
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }

  showErrorMsg(error: any) {
    this.loading = false;
    this.showAlert = true;
    this.alertMessage = error.error.message;
    this.alertType = 'danger';
    setTimeout(() => this.showAlert = false, 3000);
  }
}
