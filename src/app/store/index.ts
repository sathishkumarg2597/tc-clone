import { CartReducer, CartState } from "./cart/cart.reducer";
import { CategoryReducer, CategoryState } from "./category/category.reducer"

export const CombinedReducers = {
    category: CategoryReducer,
    cart: CartReducer,
}

export interface AppState{
    category: CategoryState;
    cart: CartState
}