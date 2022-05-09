import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryProductComponent } from '../category-product/category-product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: ":category",
    component: CategoryProductComponent,
    pathMatch: "full",
  },
  {
    path: ":category/:product",
    component: ProductDetailsComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
