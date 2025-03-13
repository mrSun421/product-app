import { booleanAttribute, Component, EventEmitter, input, Input, Output } from '@angular/core';
import { ProductDetail } from '../product-detail';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * This component takes a ProductDetail interface, then displays the name, price, and details of the product.
 * In addition, there is an button that emits the ProductDetail that is part of this.
 * This button can optionally be disabled for read only purposes.
  */

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  count: number = 0;
  @Input({
    transform: booleanAttribute
  }) disableAddButton: boolean = false;
  @Input() productDetail!: ProductDetail;
  @Output() addProductEvent = new EventEmitter<ProductDetail>();

  addProduct() {
    this.addProductEvent.emit(this.productDetail);
  }

}
