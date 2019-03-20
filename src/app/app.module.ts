import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from './home-page/home-page.module';
import { AuthGuardService } from './auth-guard.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CoursesComponent } from './courses/courses.component';
import { CoursesModule } from './courses/courses.module';
import { DataStoreService } from './data-store.service';
import { SidebarModule } from './sidebar/sidebar.module';
import { StudentModule } from './student/student.module';
import { InstructorModule } from './instructor/instructor.module';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HomePageModule,
    BrowserAnimationsModule,
    NgbModule,
    CoursesModule,
    SidebarModule,
    StudentModule,
    InstructorModule
  ],
  providers: [
    AuthGuardService,
    DataStoreService
  ],
  exports: [
    SidebarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
