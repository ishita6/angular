import { Component, OnInit } from '@angular/core';
import { scholarshipDesc } from 'src/app/services/scholarshipDesc';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.css']
})
export class scholarshipComponent implements OnInit {

  constructor(private services:scholarshipDesc) { }
  scholarshipData:any;
  ngOnInit(): void {
    this.scholarshipData = this.services.scholarshipDetails;
  }

}
