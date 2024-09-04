import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-product-entry-management',
  templateUrl: './product-entry-management.component.html',
  styleUrls: ['./product-entry-management.component.scss'],
})
export class ProductEntryManagementComponent {


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

  selectedDate: any
  ExpDate: any
  isDatePicker: boolean = false
  constructor(public app: AppComponent) { }

  ionViewWillEnter() {
    this.app.leftSide = true
    this.app.topHeader = true
    this.app.anotherLeftMenu = true
    this.app.leftSelectedMenu = 9;
    this.isDatePicker = false
  }

  onDateSelected(event: any) {
    this.ExpDate = event.detail.value;
    this.isDatePicker = false
  }

}
