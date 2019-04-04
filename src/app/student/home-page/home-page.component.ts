import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  id: string;

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
        console.log(success);
      }, error => {
        console.log(error);
      });
    }
  }

}
