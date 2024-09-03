import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent {

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

  TableData: any = [
    {
      billNo: 150,
      date: '10/20/2050',
      time: '10:50 pm',
      discount: '20 %',
      memberId: '00000.12',
      loyaltyPoints: 27,
      loyaltyAmount: 27,
      subTotal: 120.00,
      parcelCharges: 20.00,
      grandTotal: 140.00,
      cash: 150.00,
      change: 10.00,
      paymentMode: 'Cash',
      status: 'Paid'
    },
    {
      billNo: 150,
      date: '10/20/2050',
      time: '10:50 pm',
      discount: '20 %',
      memberId: '00000.12',
      loyaltyPoints: 27,
      loyaltyAmount: 27,
      subTotal: 120.00,
      parcelCharges: 20.00,
      grandTotal: 140.00,
      cash: null,
      change: null,
      paymentMode: '-',
      status: 'Un Paid'
    },
    {
      billNo: 150,
      date: '10/20/2050',
      time: '10:50 pm',
      discount: '20 %',
      memberId: '00000.12',
      loyaltyPoints: 27,
      loyaltyAmount: 27,
      subTotal: 120.00,
      parcelCharges: 20.00,
      grandTotal: 140.00,
      cash: 150.00,
      change: null,
      paymentMode: 'Phone Pay',
      status: 'Paid'
    }
  ]
  isDatePicker: boolean = false;
  selectedDate: any;
  constructor(public app: AppComponent) { }

  ionViewWillEnter() {
    this.app.leftSide = true
    this.app.topHeader = true
    this.app.anotherLeftMenu = false
    this.app.leftSelectedMenu = 4
  }

  onDateSelected(event: any) {
    this.selectedDate = event.detail.value;
    this.isDatePicker = false
  }

}
