import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OTPComponent {

  viewMode: boolean = false;
  AlertPopup: boolean = false;
  clickedEye: any;
  userData: any = {}
  AlertPopupData: any = {}

  constructor(public api: ApiService) { }

  ionViewWillEnter() {
    this.userData = {}
  }

  viewPassword(id: any) {
    this.clickedEye = id;
    this.viewMode = !this.viewMode;
  }

  setCredentials() {
    if (!this.userData.UserName || !this.userData.Password || !this.userData.ConfirmPassword) {
      this.showAlert('Fields are Missing', 'Try again', this.tryAgain);
    } else if (this.userData.Password !== this.userData.ConfirmPassword) {
      this.showAlert('Password Mismatch', 'Try again', this.tryAgain);
    } else {
      this.api.setCredential(this.userData).subscribe({
        next: (res => {
          console.log(res);
          this.showAlert('Successful', 'Done', this.tryAgain);
        }),
        error: (err => {
          console.log(err);
          this.showAlert('Something went wrong', 'Try again', this.tryAgain);
        })
      });
    }
  }

  showAlert(message: string, buttonText: string, clickAction: () => void) {
    this.AlertPopup = true;
    this.AlertPopupData = {
      message: message,
      button: buttonText,
      click: clickAction
    };
  }

  tryAgain() {
    this.AlertPopup = false;
  }

  closeAlert() {
    this.AlertPopupData = {}
    this.AlertPopup = false;
  }

}
