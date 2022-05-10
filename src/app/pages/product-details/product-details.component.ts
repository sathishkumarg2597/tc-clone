import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:any = {}
  quantity: number = 0
  subscription: Subscription;

  constructor(private categorySrv: CategoryService, private cartSrv: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.params["product"];
    this.product = this.categorySrv.getProductDescById(productId);
    this.quantity = this.cartSrv.getQuantity(this.product)
  }

  addCart(event: any){
    event.stopPropagation();
    this.cartSrv.addToCart(this.product);
    this.quantity = this.cartSrv.getQuantity(this.product)
  }
  reduceQuantity(event: any){
    event.stopPropagation();
    this.cartSrv.removeCart(this.product);
    this.quantity = this.cartSrv.getQuantity(this.product)
  }

}
