import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showLogOut: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.showLogOut  = true;
    }
  }

}
