import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductCartComponent } from './products/product-cart/product-cart.component';
import { FavoriteProductComponent } from './products/favorite-product/favorite-product.component';
import { SliceStringPipe } from './_pipes/slice-string.pipe';
import { SearchArrayPipe } from './_pipes/search-array.pipe';
import { FormsModule } from '@angular/forms';
import { BackgroundColorDirective } from './_directive/background-color.directive';
import { TextColorDirective } from './_directive/text-color.directive';
import { RepeatElementDirective } from './_directive/repeat-element.directive';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductCartComponent,
    FavoriteProductComponent,
    SliceStringPipe,
    SearchArrayPipe,
    BackgroundColorDirective,
    TextColorDirective,
    RepeatElementDirective,
    ProductDetailComponent,
    RouteNotFoundComponent,
    UsersListComponent,
    LoginComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
