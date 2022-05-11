import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { CategoryService } from 'src/app/services/category.service';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss']
})
export class CategoryProductComponent implements OnInit,OnDestroy {

  categoryName: string = "";
  products: any[] = [];
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetchProducts(){
    this.subscription = this.route.params.subscribe(params=>{
      this.store.select("category").subscribe(item=>{
        this.categoryName = item.categoryDetails[params['category']].name;
        this.products = item.categoryProducts[params['category']];
      })
    });
  }

}
