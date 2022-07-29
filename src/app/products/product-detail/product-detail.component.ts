import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/_interface/iproduct';
import { ProductService } from 'src/app/_service/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productID: number = 0;
  productData?: IProduct;
  constructor(
    private aroute: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.aroute.params.subscribe((param) => {
      this.productID = param['productID'];
    });

    this.productData = this.productService.getProductById(this.productID);
  }

  goBack() {
    this.location.back();
  }
}
