import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SidebarModule
  ]
})
export class StudentModule { }
