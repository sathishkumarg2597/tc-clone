import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:any = {}
  quantity: number = 0
  subscription: Subscription;
  description: any = ""

  constructor(private cartSrv: CartService, private catSrv: CategoryService, private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.params["product"];
    this.store.select("category").subscribe(item=>{
      this.product = item.allProducts[productId];
      this.catSrv.getProductDescById(productId).subscribe((item: any)=>{
        this.description = item?.desc;
      });
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
}
