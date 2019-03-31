import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    SidebarModule
  ]
})
export class InstructorModule { }
