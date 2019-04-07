import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

interface Country {
  name: string;
  area: number;
  checked: boolean;
  population: number;
}
const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    area: 17075200,
    checked: false,
    population: 146989754
  },
  {
    name: 'Canada',
    area: 9976140,
    checked: false,
    population: 36624199
  },
  {
    name: 'United States',
    area: 9629091,
    checked: true,
    population: 324459463
  },
  {
    name: 'China',
    area: 9596960,
    checked: true,
    population: 1409517397
  }
];
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  countries = COUNTRIES;
  id: string;
  userData: any;
  fName: string;
  lName: string;
  map = new Map();
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    if (this.id !== null && this.id.length > 0) {
      this.studentService.fetchUserDetails(this.id).subscribe(success => {
        this.userData = success;
        this.fName = this.userData.firstName;
        this.lName = this.userData.lastName;
      }, error => {
        console.log(error);
      });
    }
  }
  changed(event: any) {
    // console.log(event);
  }
}
