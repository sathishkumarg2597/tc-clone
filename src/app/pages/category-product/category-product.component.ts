import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss']
})
export class CategoryProductComponent implements OnInit,OnDestroy {

  categoryName: string = "";
  products: any[] = [];
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private categorySrv: CategoryService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetchProducts(){
    this.subscription = this.route.params.subscribe(params=>{
      let selectedCategory = this.categorySrv.getCategoryByUrlKey(params['category'])
      this.categoryName = selectedCategory.name;
      this.products = this.categorySrv.categoryProducts[params['category']];
    });
  }

}
