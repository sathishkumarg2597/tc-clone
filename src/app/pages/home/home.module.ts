import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { CategoryCardComponent } from 'src/app/components/category-card/category-card.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { CategoryProductComponent } from '../category-product/category-product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { SummaryComponent } from '../checkout/summary/summary.component';

@NgModule({
  declarations: [
    HomeComponent,
    ShopCategoryComponent,
    BlogsComponent,
    ProductListComponent,
    CategoryCardComponent,
    ProductCardComponent,
    BannerComponent,
    CategoryProductComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    SummaryComponent,
  ],
  imports: [
      SharedModule,
      HomeRoutingModule,
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
