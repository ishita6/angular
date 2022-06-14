import { Component, OnInit } from '@angular/core';
import { description } from 'src/app/services/description';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:description) { }
  jobData:any;
  ngOnInit(): void {
    this.jobData = this.service.jobDetails;
  }

}
