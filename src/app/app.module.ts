import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductManagementComponent } from './product-management/product-management.component';
import { DishManagementComponent } from './dish-management/dish-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { TableManagementComponent } from './table-management/table-management.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SpecialNotesManagementComponent } from './special-notes-management/special-notes-management.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { OTPComponent } from './otp/otp.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, OTPComponent, ProductManagementComponent, DishManagementComponent, UserManagementComponent, TableManagementComponent, OrderHistoryComponent, SpecialNotesManagementComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, FormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule { }
