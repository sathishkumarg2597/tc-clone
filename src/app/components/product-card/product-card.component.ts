import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  product: any;
  @Input() entityId: number;

  constructor(private categorySrv: CategoryService) { }

  ngOnInit(): void {
    this.product = this.categorySrv.getProductById(this.entityId)
  }
}
