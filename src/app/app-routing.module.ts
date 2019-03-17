import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CoursesComponent } from './courses/courses.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthGuardService } from './auth-guard.service';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'course/home',
    component: CoursesComponent,
    canActivate: [AuthGuardService]
  }
  // {
  //   path: 'course/home',
  //   component: SidebarComponent,
  //   outlet: 'secondary'
  // },
  // {
  //   path: '',
  //   component: SidebarComponent,
  //   outlet: 'secondary'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
