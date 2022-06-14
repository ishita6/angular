import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class description {
  

  constructor() { }

  // job Details 
  
  jobDetails = [
    {
      id:1,
      JobName:" Front-End Development Internship",
      JobDetails:"Skills required: HTML, CSS, JavaScript, React",
      JobExperience:"Experience: Fresher or 0-2yr",
      JobImg:"https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg"
    },
    {
      id:2,
      JobName:"App Development Internship",
      JobDetails:"Skills Required: Java,APIs, Databases, Material Design",
      JobExperience:"Experience: 0-5 yr",
      JobImg:"https://cdn.ttgtmedia.com/rms/onlineimages/app_arch-mobile_app_dev_process-f_mobile.png"
    },
    {
      id:3,
      JobName:"Python for ML/AI Internship",
      JobDetails:"Skills Required: Python,Numpy,Pandas,sklearn",
      JobExperience:"Experience: 0-2yr",
      JobImg:"http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/06/Artificial-Intelligence-With-Python.jpg"
    },
    {
      id:4,
      JobName:"Sales Representative",
      JobDetails:"Skills required:English Proficiency (Spoken),Sales,Sales and Marketing",
      JobExperience:"Experience: Fresher ",
      JobImg:"https://www.training.co.nz/wp-content/uploads/salesrepFeature.png"
    },
    {
      id:5,
      JobName:"Brand Development Executive Job",
      JobDetails:"Skills Required: Digital Marketing ,Google AdWords,Social Media Marketing",
      JobImg:"https://www.marketing91.com/wp-content/uploads/2020/02/Brand-Development.jpg"
    },
    {
      id:6,
      JobName:"Growth Manager Job",
      JobDetails:"Skills Required:Digital Marketing,MS-Excel,Email Marketing,Sales and Marketing ",
      JobImg:"https://i.ytimg.com/vi/VhbgJEHtiJM/maxresdefault.jpg"
    }
  ]

}
