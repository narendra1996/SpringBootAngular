import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    SidebarModule
  ]
})
export class InstructorModule { }
