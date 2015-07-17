/// <reference path="../../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'navbar'
})
@View({
  directives: [],
  templateUrl: './components/shared/navbar/navbar.html',
})
// Component controller
export class Navbar {
  title: string;
  constructor() {
    this.title = 'Client'
  }
}

bootstrap(Navbar);
