import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(private productservie: ProductService, private router: Router) {}

  ngOnInit(): void {}

  productData = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imgUrl: new FormControl('', Validators.required),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  get title() {
    return this.productData.get('title') as FormControl;
  }

  get description() {
    return this.productData.get('description') as FormControl;
  }

  get imgUrl() {
    return this.productData.get('imgUrl') as FormControl;
  }

  get price() {
    return this.productData.get('price') as FormControl;
  }

  submitProductData(product: any) {
    this.productservie.appendToAllProducts({
      category: 'test',
      description: product.description,
      id: 25,
      image: product.imgUrl,
      price: product.price,
      rating: { rate: 2.5, count: 3 },
      title: product.title,
    });

    this.router.navigate(['']);
    console.log(product);
  }
}
