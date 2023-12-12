import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  router?: string;

  constructor(private _router: Router) {
    this.router = this._router.url;
    console.log('his.router: ', this.router);
  }
}
