import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anc-record';

  showNavbar :boolean = false;
  menuToggler(){
    this.showNavbar = !this.showNavbar;
  }
}
