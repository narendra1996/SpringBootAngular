import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePageService } from '../home-page.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  loading = false;
  submitted = false;
  isRecoveryEmailSent = false;

  alertType: string;
  showAlert: boolean;
  closeAlert: boolean;
  alertMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private homePageService: HomePageService
  ) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
      // password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.resetForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.resetForm.invalid) {
      this.loading = false;
      return;
    }
    if (!this.isRecoveryEmailSent) {
      this.homePageService.SendRecoveryEmail(this.resetForm ).subscribe(success => {
        this.isRecoveryEmailSent = true;
        console.log(success);
        this.showSuccessMsg(success);
      }, error => {
        console.log(error);
        this.showErrMsg(error);
      });
    }
  }

  showErrMsg(error: any) {
    this.loading = false;
    this.showAlert = true;
    this.alertType = 'danger';
    this.alertMessage = error.error.message;
    setTimeout(() => this.showAlert = false, 3000);
  }

  showSuccessMsg(success: any) {
    this.loading = false;
    this.showAlert = true;
    this.alertType = 'success';
    this.alertMessage = 'Recovery password sent to your Email Address';
    setTimeout(() => this.showAlert = false, 3000);

  }
}
