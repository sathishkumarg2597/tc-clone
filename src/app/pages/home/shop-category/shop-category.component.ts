import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.scss']
})
export class ShopCategoryComponent implements OnInit {

  categories: any[] = []

  constructor(private categorySrv: CategoryService) { }

  ngOnInit(): void {
    this.categorySrv.getAllCategory().subscribe((item: any[]) => {
      let catArr: any[] = []
      item.map(cat => {
        catArr.push(cat.category)
      })
      this.categories = catArr;
    });;
  }

}
