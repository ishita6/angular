import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
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

// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { environment } from '../environments/environment';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// import { HotToastModule } from '@ngneat/hot-toast';
// import { LandingComponent } from './components/landing/landing.component';
import { MatMenuModule } from '@angular/material/menu';
// import { ProfileComponent } from './components/profile/profile.component';
// import { getStorage, provideStorage } from '@angular/fire/storage';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
