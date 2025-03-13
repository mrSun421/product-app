import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductDetail } from '../product-detail';
import { ProductCardComponent } from '../product-card/product-card.component';

/**
 * This component is the page that loads when routing to /products/:id.
 * If the component cannot find the product id from the service, it errors out to the 404 page.
  */

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, ProductCardComponent, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  productDetail: ProductDetail = { id: -1, name: "", description: "", price: 0.0 };

  constructor() {
    let productDetailId = Number(this.route.snapshot.params['id']);
    let detail = this.productService.getProductDetailById(productDetailId);
    if (detail !== undefined) {
      this.productDetail = detail ?? { id: -1, name: "", description: "", price: 0.0 };
    } else {
      this.router.navigate(['404']);
    }
  }
}
