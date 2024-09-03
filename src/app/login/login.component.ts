import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {


  viewMode: boolean = false;

  constructor(public api: ApiService) { }

  loginData: any = {}

  ionViewWillEnter() {
    this.loginData = {
      Email: '',
      Password: ''
    }
  }

  viewPassword() {
    this.viewMode = !this.viewMode;
  }

  doLogin() {
    this.api.Login(this.loginData).subscribe({
      next: (res => {
        console.log(res);
      }), error: (err => {
        console.log(err);
      })
    })
  }

}
