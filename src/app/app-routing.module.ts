import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';
import { DishManagementComponent } from './dish-management/dish-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { TableManagementComponent } from './table-management/table-management.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SpecialNotesManagementComponent } from './special-notes-management/special-notes-management.component';
import { LoginComponent } from './login/login.component';
import { OTPComponent } from './otp/otp.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { GSTManagementComponent } from './gst-management/gst-management.component';
import { ProductEntryManagementComponent } from './product-entry-management/product-entry-management.component';


const routes: Routes = [
  {
    path: 'admin/home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'admin/home',
    pathMatch: 'full'
  },
  {
    path: 'admin/login',
    component: LoginComponent
  },
  {
    path: 'admin/setPassword',
    component: OTPComponent
  },
  {
    path: 'admin/ProductManagement',
    component: ProductManagementComponent
  },
  {
    path: 'admin/DishManagement',
    component: DishManagementComponent
  },
  {
    path: 'admin/userManagement',
    component: UserManagementComponent
  },
  {
    path: 'admin/tableManagement',
    component: TableManagementComponent
  },
  {
    path: 'admin/OrderHisitory',
    component: OrderHistoryComponent
  },
  {
    path: 'admin/specialNotesManagement',
    component: SpecialNotesManagementComponent
  },
  {
    path: 'admin/customerRegistration',
    component: CustomerRegistrationComponent
  },
  {
    path: 'admin/GST-Management',
    component: GSTManagementComponent
  },
  {
    path: 'admin/ProductEntryManagement',
    component: ProductEntryManagementComponent
  },
  {
    path: 'admin/specialNotesManagement',
    component: SpecialNotesManagementComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
