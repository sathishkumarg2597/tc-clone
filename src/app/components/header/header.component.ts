import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartListQuantity:number = 0;
  subscription: Subscription;
  @Output() openSearchNav = new EventEmitter<void>();
  @Output() openLoginNav = new EventEmitter<void>();
  @Output() openCartNav = new EventEmitter<void>();

  constructor(private cartSrv: CartService) { }

  ngOnInit(): void {
    this.subscription = this.cartSrv.cartUpdated.subscribe(cart=>{
      this.cartListQuantity = cart.length;
    });
  }

  openSearch(){
    this.openSearchNav.emit()
  }

  openLogin(){
    this.openLoginNav.emit()
  }

  openCart(){
    this.openCartNav.emit();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
