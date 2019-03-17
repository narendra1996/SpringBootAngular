import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomePageLoginService } from './home-page-login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

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
    private loginUser: HomePageLoginService) { }

    ngOnInit() {
      localStorage.removeItem('currentUser');
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
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
      this.loginUser.loginUser(this.loginForm).subscribe(success => {
          console.log(success);
          localStorage.setItem('currentUser', 'narendra');
          this.routetoCourse();
          }, error => {
            console.log(error);
            this.showErrMsg(error);
          });
      console.log(status);
    }

    routetoCourse() {
      // this.router.navigate(['/course/home']);
      // this.router.navigateByUrl('/sidebar', { skipLocationChange: true });
      window.location.reload();
      this.router.navigate(['/course/home']);
    }

    showErrMsg(error: any) {
      this.loading = false;
      this.showAlert = true;
      this.alertType = 'danger';
      this.alertMessage = error.error.message;
      setTimeout(() => this.showAlert = false, 3000);

    }
}
