import { Actions, Effect, ofType } from "@ngrx/effects";
import { of, switchMap } from "rxjs";

import * as CartActions from "./cart.action";

export class CartEffect{

    constructor(private action$: Actions){}

    @Effect() addCart = this.action$.pipe(
        ofType(CartActions.ADD_CART),
        switchMap((action: CartActions.addCart) => {
            let updatedCart: any[] = []
            return of(new CartActions.updateCart(updatedCart));
        })
    )
}