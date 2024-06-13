import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anc-record';

  navList = [
    {navItem: 'Dashboard', route: '/'},
    {navItem: 'All ANC', route: '/all-anc'},
    {navItem: 'All HBNC', route: '/all-hbnc'},
  ];

  showNavbar :boolean = false;
  menuToggler(){
    this.showNavbar = !this.showNavbar;
  }
}
