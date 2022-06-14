import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { scholarshipDesc } from 'src/app/services/scholarshipDesc';

@Component({
  selector: 'app-scholarshipPage',
  templateUrl: './scholarshipPage.component.html',
  styleUrls: ['./scholarshipPage.component.css']
})

// implements OnInit 
export class scholarshipPageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private services:scholarshipDesc) { }
  getJobId:any;
  scholarshipData:any;
  ngOnInit(): void {
    this.getJobId = this.param.snapshot.paramMap.get('id');
    console.log(this.getJobId,'getjob');
    if(this.getJobId)
    {
      this.scholarshipData =  this.services.scholarshipDetails.filter((value)=>{
          return value.id == this.getJobId;
        });
        console.log(this.scholarshipData,'scholarshipData>>');
        
    }
    
  }

}
