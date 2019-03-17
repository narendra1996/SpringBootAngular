import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarModule } from '../sidebar/sidebar.module';


@NgModule({
    declarations: [
      AddCourseComponent
],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      CoursesRoutingModule,
      MatSelectModule,
      NgbAlertModule,
      SidebarModule
    ],
    providers: [],
    bootstrap: [CoursesComponent]
  })
  export class CoursesModule {}
