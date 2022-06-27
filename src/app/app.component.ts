import { slideInAnimation } from './app.animation';
import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})

export class AppComponent {
  title = 'cloudWeb';
  data = [];

  ngOnInit(){
    AOS.init();
  }
  
}
