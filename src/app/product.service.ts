import { Injectable } from '@angular/core';
import { ProductDetail } from './product-detail';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productDetailList: ProductDetail[] = [
    {
      id: 0,
      name: "Oranges",
      price: 1.0,
      description: "asdfhjklasdfhjklasd"
    },
    {
      id: 1,
      name: "Apples",
      price: 1.0,
      description: "asdfjk"
    },
    {
      id: 2,
      name: "Pears",
      price: 1.0,
      description: "asdfjkadsf"
    },
  ];
  getAllProductDetails(): ProductDetail[] {
    return this.productDetailList;
  }
  getProductDetailById(id: number): ProductDetail | undefined {
    return this.productDetailList.find((productDetail) => productDetail.id === id);
  }
  constructor() { }
}
