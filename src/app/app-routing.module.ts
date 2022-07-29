import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  {
    path: 'productslist',
    component: ProductListComponent,
    title: 'Products List',
  },
  {
    path: '',
    redirectTo: 'productslist',
    pathMatch: 'full',
  },
  {
    path: 'productdetail/:productID',
    component: ProductDetailComponent,
  },
  {
    path: 'addproduct',
    component: AddProductComponent,
  },
  {
    path: 'userslist',
    component: UsersListComponent,
    title: 'Users List',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Users List',
  },
  {
    path: '**',
    component: RouteNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
