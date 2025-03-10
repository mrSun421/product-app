import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductDetail } from '../product-detail';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productService: ProductService = inject(ProductService);
  productDetailList: ProductDetail[] = [];

  constructor() {
    this.productDetailList = this.productService.getAllProductDetails();
  }
  products = new Array<ProductDetail>();
  addProduct(productDetail: ProductDetail) {
    let productsIds = this.products.map((pr) => pr.id);
    if (productsIds.some((id) => id === productDetail.id)) {
      return;
    } else {
      this.products.push(productDetail);
    }
  }
}
