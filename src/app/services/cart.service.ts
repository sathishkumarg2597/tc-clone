import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class CartService{
    cartList: any[] = [];
    cartQuantityUpdated = new Subject<number>();

    addToCart(product: any){
        let selectedProduct = this.cartList.indexOf(product)
        if(selectedProduct >= 0){
            this.cartList[selectedProduct].quantity += 1;
            return;
        }
        product.quantity = 1;
        this.cartList = [...this.cartList, product]
        this.cartQuantityUpdated.next(this.cartList.length)
    }

    removeCart(product: any){
        let selectedProductIndex = this.cartList.indexOf(product)
        if(this.cartList[selectedProductIndex].quantity > 0){
            this.cartList[selectedProductIndex].quantity -= 1;
            return;
        }
        this.cartList.slice(0, selectedProductIndex)
        this.cartQuantityUpdated.next(this.cartList.length)
    }

    getQuantity(product: any){
        let selectedProduct = this.cartList.find(item => item.entity_id == product.entity_id)
        return selectedProduct?.quantity || 0;
    }
}