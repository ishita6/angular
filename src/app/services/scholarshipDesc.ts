import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class scholarshipDesc {

  constructor() { }

  // scholarship Details 
  
  scholarshipDetails = [
    {
      "id": 1 ,
      "name": "Laboratory" ,
      "description": "Fellows are assigned to laboratories in CDC’s National Center for Environmental Health (NCEH), Division of Laboratory Sciences (DLS) where they will be part of a multidisciplinary team and will work with state-of-the-art analytical instrumentation on topics relevant to public health." ,
      "openTo": "OpenTo: Undergraduate and graduate students majoring in applied sciences",
      "Length": "Length/Salary: 10 Weeks, paid",
      "Period": "Application Period: October/November",
      "Link": " Link:https://www.cdc.gov/nceh/dls/pdf/orise_summer_flyer-508.pdf"
    },

    {
      "id": 2 ,
      "name": "Health Education/Communication" ,
      "description": "Offers a unique internship opportunity to prepare students of federally designated minority-serving institutions (MSIs) to apply academic skills and problem-solving to real-life work experiences while the public health programs they serve gain vitality and fresh perspectives from future leaders." ,
      "openTo": "OpenTo: Undergraduate and graduate students from minority-serving institutions",
      "Length": "Length/Salary: 12 Weeks, paid ",
      "Period": "Application Period: Various months For more information, contact Karen Probert at internship@asphn.org.",
      "Link": "Link: https://asphn.org/health-equity-internship-program/"
    },

    {
      "id": 3 ,
      "name": "General Interest" ,
      "description":"Work study experience exposing students to a diverse array of careers in the federal sector.",
      "openTo": "openTo:Undergraduates",
      "Length": "Length/Salary: varies, paid",
      "Period": "Application Period: Students should contact the Federal Work-Study Coordinator in their financial aid office for available CDC/ATSDR work study opportunities",
      "Link": "Link: https://jobs.cdc.gov/"
    },
    {
      "id": 4 ,
      "name": "Minority Health/Health Equity" ,
      "description":"CDC’s Undergraduate Public Health Scholars (CUPS) program prepares a diverse body of students to consider public health as a career to ensure a future where the American public benefits from a more diverse and better trained public health workforce.",
      "openTo": "openTo:Rising juniors, seniors, and recent graduates",
      "Length": "Length/Salary: Varies per opportunity",
      "Period": "Application Period: Varies per opportunity",
      "Link": "Link: https://www.cdc.gov/healthequity/features/cups/"
    }
    
  ]

}
