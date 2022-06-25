import { Component, OnInit } from '@angular/core';
import { description } from 'src/app/services/description';
import { scholarshipDesc } from 'src/app/services/scholarshipDesc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:description, private services:scholarshipDesc ) { }
  jobData:any;
  scholarshipData:any;


  ngOnInit(): void {
    this.jobData = this.service.jobDetails;
    this.scholarshipData = this.services.scholarshipDetails;
  
  }
}