import { booleanAttribute, Component, EventEmitter, input, Input, Output } from '@angular/core';
import { ProductDetail } from '../product-detail';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
