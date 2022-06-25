import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// import { Component } from '@angular/core';
// @Component({
//     // tslint:disable-next-line:component-selector
//     selector: 'app-navbar',
//     templateUrl: './navbar.component.html',
//     styleUrls: ['./navbar.component.scss']
// })


// export class NavbarComponent {
//     public items: { field: string }[] = [
//         { field: 'Option 1' },
//         { field: 'Option 2' },
//         { field: 'Option 3' }
//     ];
// }

