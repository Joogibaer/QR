import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
          <nav-bar></nav-bar>
          <router-outlet></router-outlet>
          `

//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SwissQr-Frontend-app';
}
