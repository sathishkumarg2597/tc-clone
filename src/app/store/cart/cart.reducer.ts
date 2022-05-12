import * as CartActions from "./cart.action";

export interface CartState{
    cartList: any[];
}

export const initialState: CartState = {
    cartList: [],
}

export function CartReducer(state: CartState = initialState, action: any){
    switch(action.type){
        case CartActions.UPDATE_CART:
            return {
                ...state,
                cartList: action.payload,
            };
        default: 
            return state;
    }
}