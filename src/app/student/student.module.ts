import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { StudentRoutingModule } from './student-routing.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SidebarModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class StudentModule { }
