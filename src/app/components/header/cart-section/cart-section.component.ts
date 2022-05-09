import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-section',
  templateUrl: './cart-section.component.html',
  styleUrls: ['./cart-section.component.scss']
})
export class CartSectionComponent implements OnInit, OnDestroy {

  @Output() closeCartNav = new EventEmitter<void>();

  subscription: Subscription;

  constructor(private cartSrv: CartService) { }

  cartList: any[] = [];

  ngOnInit(): void {
    this.subscription = this.cartSrv.cartUpdated.subscribe(item=>{
      this.cartList = item
    })
  }

  closeNav(){
    this.closeCartNav.emit();
  }

  addCart(product: any){
    this.cartSrv.addToCart(product);
  }

  reduceQuantity(product: any){
    this.cartSrv.removeCart(product);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
