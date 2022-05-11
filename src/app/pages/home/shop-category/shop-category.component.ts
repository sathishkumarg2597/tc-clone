import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CategoryService } from 'src/app/services/category.service';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.scss']
})
export class ShopCategoryComponent implements OnInit {

  categories: any[] = []

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select("category").subscribe(item=>{
      this.categories = item.allCategories;
    })
  }

}
