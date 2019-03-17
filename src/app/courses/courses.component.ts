import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  userData: any;
  firstName: string;
  lastName: string;

  constructor(private dataService: DataStoreService) { }

  ngOnInit() {
    this.userData = this.dataService.retrieveData();
    this.firstName = this.userData.firstName;
    console.log(this.userData);
  }

}
