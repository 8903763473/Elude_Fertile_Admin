import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-special-notes-management',
  templateUrl: './special-notes-management.component.html',
  styleUrls: ['./special-notes-management.component.scss'],
})
export class SpecialNotesManagementComponent {

  constructor(public app: AppComponent) { }

  ionViewWillEnter() {
    this.app.leftSide = true
    this.app.topHeader = true
    this.app.anotherLeftMenu = true
    this.app.leftSelectedMenu = 10;
  }

}
