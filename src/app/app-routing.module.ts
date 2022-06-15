import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common'
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { jobComponent } from './pages/job/job.component';
import { jobpageComponent } from './pages/jobpage/jobpage.component';
import { LoginComponent } from './pages/login/login.component';
import { scholarshipComponent } from './pages/scholarship/scholarship.component';
import { scholarshipPageComponent } from './pages/scholarshipPage/scholarshipPage.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {path:'', pathMatch:'full' , component:HomeComponent},

  {path:'login',component:LoginComponent},

  {path:'sign-up',component:SignUpComponent},


  {path:'job',component:jobComponent},
  {path:'intern',component:jobComponent},
  {path:'admission',component:jobComponent},

  {path:'scholarship',component:scholarshipComponent},
  {path:'scholarship/:id',component:scholarshipPageComponent},
  
  {path:'wSpecial',component:jobComponent},
  {path:'job/:id',component:jobpageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
