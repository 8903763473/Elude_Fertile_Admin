import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
})
export class ProductManagementComponent {

  menuItems = [
    { name: 'All', img: '../../assets/categories/All.svg', description: '12 Items', isActive: true },
    { name: 'Breakfast', img: '../../assets/categories/Breakfast.svg', description: '7 Items', isActive: false },
    { name: 'Soups', img: '../../assets/categories/Soups.svg', description: '5 Items', isActive: false },
    { name: 'Pasta', img: '../../assets/categories/Pasta.svg', description: '8 Items', isActive: false },
    { name: 'Main Course', img: '../../assets/categories/MainCourse.svg', description: '15 Items', isActive: false },
    { name: 'Breakfast', img: '../../assets/categories/Breakfast.svg', description: '7 Items', isActive: false },
    { name: 'Pasta', img: '../../assets/categories/Pasta.svg', description: '8 Items', isActive: false },
    { name: 'Main Course', img: '../../assets/categories/MainCourse.svg', description: '15 Items', isActive: false },
  ];

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

  InTable: boolean = false;
  NewDishImage: any;


  constructor(public app: AppComponent) { }

  ionViewWillEnter() {
    this.app.leftSide = true
    this.app.topHeader = true
    this.app.anotherLeftMenu = true
    this.app.leftSelectedMenu = 2
  }

  // NewDishFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     console.log('Selected file:', file.name);
  //     this.NewDishImage = file.name;
  //   }
  // }

}
