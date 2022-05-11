import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { map, Subscription } from 'rxjs';

import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as categoryActions from "../../store/category/category.action";

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.scss']
})
export class CategoryHeaderComponent implements OnInit, OnDestroy {
  categories: Category[] = []
  subscription: Subscription;
  routeCategory: string = "Super Savers";

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        let params = val?.state?.root?.firstChild?.params;
        this.routeCategory = params && params['category']  ? params['category'] : "Super Savers"
      }
    });
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetchData() {
    this.store.dispatch(new categoryActions.getAllCategory());
    this.store.select("category").subscribe(item=>{
      this.categories = item.allCategories;
    })
  }

  goToCategory(categoryName: string) {
    this.router.navigate(['/', categoryName])
  }

}
