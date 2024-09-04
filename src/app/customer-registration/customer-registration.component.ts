import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss'],
})
export class CustomerRegistrationComponent {


  dummy: any = [
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    }
  ];

  constructor(public app: AppComponent) { }

  ionViewWillEnter() {
    this.app.leftSide = true
    this.app.topHeader = true
    this.app.anotherLeftMenu = true
    this.app.leftSelectedMenu = 7
  }


}
