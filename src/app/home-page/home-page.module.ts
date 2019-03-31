import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-page-routing.modules';
import { RegisterComponent } from './register/register.component';
import { MatSelectModule } from '@angular/material';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from '../sidebar/sidebar.module';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomePageService } from './home-page.service';


@NgModule({
    declarations: [
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent
],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HomePageRoutingModule,
      MatSelectModule,
      NgbAlertModule,
      SidebarModule
    ],
    providers: [
      HomePageService
    ],
    bootstrap: []
  })
  export class HomePageModule {}
