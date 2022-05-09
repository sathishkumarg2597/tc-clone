import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:any = {}

  constructor(private categorySrv: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.params["product"];
    this.product = this.categorySrv.getProductById(productId);
  }

}
