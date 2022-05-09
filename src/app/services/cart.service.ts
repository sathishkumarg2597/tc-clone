import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class CartService{
    cartList: any[] = [];
    cartUpdated = new Subject<any>();

    addToCart(product: any){
        let selectedProduct = this.cartList.indexOf(product)
        if(selectedProduct >= 0){
            this.cartList[selectedProduct].quantity += 1;
            this.cartUpdated.next(this.cartList)
            return;
        }
        product.quantity = 1;
        this.cartList = [...this.cartList, product]
        this.cartUpdated.next(this.cartList)
    }

    removeCart(product: any){
        let selectedProductIndex = this.cartList.indexOf(product)
        if(this.cartList[selectedProductIndex].quantity > 1){
            this.cartList[selectedProductIndex].quantity -= 1;
            this.cartUpdated.next(this.cartList)
            return;
        }
        this.cartList.splice(selectedProductIndex, 1)
        this.cartUpdated.next(this.cartList)
    }

    getQuantity(product: any){
        let selectedProduct = this.cartList.find(item => item.entity_id == product.entity_id)
        return selectedProduct?.quantity || 0;
    }
}