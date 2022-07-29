import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/_interface/iproduct';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input('productsData') product!: IProduct;

  constructor(private productservice: ProductService, private router: Router) {}

  ngOnInit(): void {}

  addProductToCart(product: IProduct) {
    this.productservice.setProductData(product);
  }

  goToDetails(id: number) {
    this.router.navigate(['/productdetail', id]);
  }
}
