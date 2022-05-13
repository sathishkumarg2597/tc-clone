import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { CartService } from "../services/cart.service";

@Injectable({
    providedIn: "root",
})
export class CheckoutGuard implements CanActivate{
    constructor( private cartSrv: CartService, private router: Router ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.cartSrv.cartList.length > 0){
            return true;
        }
        this.router.navigate(["/"]);
        return false;
    }   
}