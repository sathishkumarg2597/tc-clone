import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

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

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private title: Title) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.title.setTitle("Buy Meat Online") 
  }

  fetchProducts(){
    this.subscription = this.route.params.subscribe(params=>{
      this.store.select("category").subscribe(item=>{
        this.categoryName = item.categoryDetails[params['category']]?.name;
        this.title.setTitle(item.categoryDetails[params['category']]?.meta_title) 
        this.products = item.categoryProducts[params['category']];
      })
    });
  }

}
