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

  setProductData() {
    this.productData.setValue({
      title: 'test title',
      description: 'test description',
      imgUrl: 'test image url',
      price: 2,
    });
  }

  myForm = new FormGroup({
    sName: new FormControl('', Validators.required),
    email: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
    }),
  });

  get sName() {
    return this.myForm.get('sName') as FormControl;
  }

  get email() {
    return this.myForm.get('email') as FormControl;
  }

  get city() {
    return this.myForm.get('address.city') as FormControl;
  }

  get street() {
    return this.myForm.get('address.street') as FormControl;
  }
}
