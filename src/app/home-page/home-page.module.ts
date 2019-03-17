import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.modules';
import { RegisterComponent } from './register/register.component';
import { MatSelectModule } from '@angular/material';
import { HomePageRegisterService } from './home-page-register.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
    RegisterComponent
],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HomePageRoutingModule,
      MatSelectModule,
      NgbAlertModule
    ],
    providers: [
      HomePageRegisterService
    ],
    bootstrap: [HomePageComponent]
  })
  export class HomePageModule {}
