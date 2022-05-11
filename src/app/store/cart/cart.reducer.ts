export interface CartState{
    cartList: any[];
}

export const initialState: CartState = {
    cartList: [],
}

export function CartReducer(state: CartState = initialState, action: any){
    switch(action.type){
        default: 
            return state;
    }
}