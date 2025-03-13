import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductDetail } from '../product-detail';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

/**
  * This component is the page when routing to the /products page.
  * In this component, when a user clicks the add product button, it adds it to the list, without duplication.
  */

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  private productService: ProductService = inject(ProductService);
  productDetailList$ = this.productService.getAllProductDetails();

  constructor() {
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
