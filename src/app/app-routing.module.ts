import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';
import { DishManagementComponent } from './dish-management/dish-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { TableManagementComponent } from './table-management/table-management.component';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
