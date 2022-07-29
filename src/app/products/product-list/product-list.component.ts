import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/_interface/iproduct';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  allProducts: IProduct[] = [];
  filterText: string = '';

  constructor(private productservice: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.allProducts = this.productservice.getAllProducts();
  }

  dropDownHandle(event: Event) {
    event.stopPropagation();
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }
}
