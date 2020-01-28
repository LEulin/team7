import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { ServiceService } from '../../services/service.service';
import { Student } from '../../services/student';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // This is for the search
  searchsuggest : string
  student: Array<Student>


  path:string = "/dashboard/student-list";
  min: boolean = false;
  constructor(private location: Location, private route: Router, private service: ServiceService) {
    this.path = this.location.path();
    this.route.events.subscribe((val) => {
     if (val instanceof NavigationEnd) {
      this.path = val.url;
      if (this.path.includes('payCounterpart')) {
        this.path = "/dashboard/form";
      }
      
     }
    })
   }

  ngOnInit() {
  }

  goto(path) {
    this.route.navigate([path]);
    this.path = path;
  }

  // searchfunc(){
  //   this.service.getSearch()
  //   console.log(this.searchsuggest)
  // }
  
  
}
