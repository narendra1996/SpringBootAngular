import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  userData: any;
  firstName: string;
  lastName: string;
  id: string;

  constructor(private dataService: DataStoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.userData = this.dataService.retrieveData();
    // this.firstName = this.userData.firstName;
    // console.log(this.userData);
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    console.log(this.id);
  }

}
