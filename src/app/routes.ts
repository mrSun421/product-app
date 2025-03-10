import { provideRouter, Routes } from "@angular/router";
import { ProductCardComponent } from "./product-card/product-card.component";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routeConfig: Routes = [
  {
    path: '',
    redirectTo:
      'products',
    pathMatch: "full"
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: "Products",

  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    title: "Product Details",
  },
  {
    path: '**',
    redirectTo: '404',
  },
  {
    path: '404',
    title: 'NotFound',
    component: NotFoundComponent,
  }
]

export default routeConfig;
