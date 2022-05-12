import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit, OnDestroy {
  product: any;
  inCart: boolean;
  quantity: number = 0;
  @Input() entityId: number;
  subscription: Subscription;

  constructor(private cartSrv: CartService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscription = this.store.select("category").subscribe(item=>{
      this.product = item.allProducts[this.entityId];
  })
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
