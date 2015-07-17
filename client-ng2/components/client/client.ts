/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../components.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {Navbar} from '../shared/navbar/navbar';

@Component({
  selector: 'client'
})
@View({
  directives: [Navbar],
  templateUrl: './components/client/client.html',
})
// Component controller
export class Client {
  name: string;
  input: any;

  constructor() {
    this.name = 'Max';
  }

  updateName(input) {
    this.name = input.value;
    console.log(this.name);
  }
}

bootstrap(Client);
