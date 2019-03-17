import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
    declarations: [
],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      CoursesRoutingModule,
      MatSelectModule,
      NgbAlertModule
    ],
    providers: [],
    bootstrap: [CoursesComponent]
  })
  export class CoursesModule {}
