import { CategoryReducer, CategoryState } from "./category/category.reducer"

export const CombinedReducers = {
    category: CategoryReducer,
}

export interface AppState{
    category: CategoryState;
}