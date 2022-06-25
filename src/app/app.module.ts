import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { 
	IgxButtonModule,
	IgxToggleModule
 } from "igniteui-angular";
 import { NavbarComponent } from './sharepage/navbar/navbar.component';
 import { IgxDropDownModule } from 'igniteui-angular';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { jobComponent } from './pages/job/job.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { jobpageComponent } from './pages/jobpage/jobpage.component';

import { scholarshipPageComponent } from './pages/scholarshipPage/scholarshipPage.component';
import { scholarshipComponent } from './pages/scholarship/scholarship.component';
import{ LoginComponent} from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    jobComponent,
    LoginComponent,
    SignUpComponent,

    scholarshipComponent,
    scholarshipPageComponent,
    
    AboutComponent,
    ContactComponent,
    jobpageComponent,
    SignUpComponent
  ],
  imports: [
    IgxDropDownModule,
    IgxButtonModule,
	  IgxToggleModule,

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatFormFieldModule

 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    // provideStorage(() => getStorage()),
    // HotToastModule.forRoot(),
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
  schemas: []
})
export class AppModule { }
