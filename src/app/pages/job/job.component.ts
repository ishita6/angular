import { Component, OnInit } from '@angular/core';
import { description } from 'src/app/services/description';

@Component({
  selector: 'app-jobs',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class jobComponent implements OnInit {

  constructor(private service:description) { }
  jobData:any;
  ngOnInit(): void {
    this.jobData = this.service.jobDetails;
  }

}
