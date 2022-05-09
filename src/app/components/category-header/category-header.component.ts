import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { map, Subscription } from 'rxjs';

import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.scss']
})
export class CategoryHeaderComponent implements OnInit, OnDestroy {
  categories: any[] = []
  subscription: Subscription;
  routeCategory: any = "Super Savers";

  constructor(private categorySrv: CategoryService, private router: Router) { }

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
    this.categorySrv.getAllCategory().pipe(map(item=>{
      let catArr: any[] = []
      let prodArr: any = {}
      item.map(cat => {
        this.categorySrv.categoryProducts[cat?.category?.url_key] = cat.products.map((product: any) => product?.entity_id)
        cat.products.map((product: any) => {
          prodArr[product?.entity_id] = product
        })
        catArr.push(cat.category)
      })
      this.categorySrv.allProducts = prodArr;
      return catArr;
    })).subscribe((items: any[]) => {
      this.categories = items;
    });
  }

  goToCategory(categoryName: string) {
    this.router.navigate(['/', categoryName])
  }

}
