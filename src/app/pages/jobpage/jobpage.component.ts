import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { description } from 'src/app/services/description';

@Component({
  selector: 'app-jobpage',
  templateUrl: './jobpage.component.html',
  styleUrls: ['./jobpage.component.css']
})
export class jobpageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:description) { }
  getJobId:any;
  jobData:any;

  ngOnInit(): void {
    this.getJobId = this.param.snapshot.paramMap.get('id');
    console.log(this.getJobId,'getjob');
    if(this.getJobId)
    {
      this.jobData =  this.service.jobDetails.filter((value)=>{
          return value.id == this.getJobId;
        });
        console.log(this.jobData,'jobdata>>');
        
    }
    
  }

}
