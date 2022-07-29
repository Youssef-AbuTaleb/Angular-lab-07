import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/_interface/iproduct';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css'],
})
export class ProductCartComponent implements OnInit {
  productData?: IProduct;
  productsCart?: IProduct[] = [];
  constructor(private productservice: ProductService) {}

  ngOnInit(): void {
    this.productservice.getProductData().subscribe((data) => {
      this.productData = data;
      this.productsCart?.push(this.productData);
      console.log(this.productsCart);
    });

    this.productservice.getRemovedProductData().subscribe((data) => {
      this.productData = data;
      this.productsCart = this.productsCart?.filter(
        (item) => item.id !== data.id
      );
    });
  }

  removeProductFromCart(product: IProduct) {
    this.productservice.setRemovedProductData(product);
  }
}
