import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePageService } from '../home-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  passwordChangeFrom: FormGroup;
  loading = false;
  submitted = false;
  isRecoveryEmailSent = false;
  passwordNotmatched = false;

  alertType: string;
  showAlert: boolean;
  closeAlert: boolean;
  alertMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private homePageService: HomePageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
      // password: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.passwordChangeFrom = this.formBuilder.group({
      recoveryPassword: ['', [Validators.required, Validators.minLength(8)]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() { return this.resetForm.controls; }

  get p() { return this.passwordChangeFrom.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.resetForm.invalid) {
      this.loading = false;
      return;
    }
    if (!this.isRecoveryEmailSent) {
      this.homePageService.SendRecoveryEmail(this.resetForm ).subscribe(success => {
        this.submitted = false;
        this.isRecoveryEmailSent = true;
        console.log(success);
        this.showSuccessMsg(success);
      }, error => {
        console.log(error);
        this.showErrMsg(error);
      });
    }
  }

  changePassword() {
    this.passwordNotmatched = false;
    this.submitted = true;
    this.loading = true;
    if (this.passwordChangeFrom.invalid) {
      this.loading = false;
      return;
    }
    if (this.passwordChangeFrom.controls.newPassword.value !== this.passwordChangeFrom.controls.ConfirmPassword.value) {
      this.loading = false;
      this.passwordNotmatched = true;
      return;
    }
    this.homePageService.ChangePassword(this.passwordChangeFrom, this.resetForm.controls.email.value).subscribe(success => {
      console.log(success);
      this.showSuccessMsg(success);
      this.routeToLogin();
    }, error => {
      console.log(error);
      this.showErrMsg(error);
    });
  }
  showErrMsg(error: any) {
    this.loading = false;
    this.showAlert = true;
    this.alertType = 'danger';
    this.alertMessage = error.error.message;
    setTimeout(() => this.showAlert = false, 3000);
  }

  showSuccessMsg(success: any) {
    console.log(success);
    this.loading = false;
    this.showAlert = true;
    this.alertType = 'success';
    this.alertMessage = success.message;
    setTimeout(() => this.showAlert = false, 5000);

  }

  routeToLogin() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }
}
