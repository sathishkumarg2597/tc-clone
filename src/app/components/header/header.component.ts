import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartListQuabtity:number = 0;
  subscription: Subscription;
  @Output() openSearchNav = new EventEmitter<void>();
  @Output() openLoginNav = new EventEmitter<void>();

  constructor(private cartSrv: CartService) { }

  ngOnInit(): void {
    this.subscription = this.cartSrv.cartQuantityUpdated.subscribe(quantity=>{
      this.cartListQuabtity = quantity;
    });
  }

  openSearch(){
    this.openSearchNav.emit()
  }

  openLogin(){
    this.openLoginNav.emit()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
