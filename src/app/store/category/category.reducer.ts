import { Category } from "src/app/models/category.model";
import * as categoryAction from "./category.action";

export interface CategoryState{
    allCategories: any;
    categoryProducts: any;
    categoryDetails: any,
    allProducts: any;
    loading: boolean;
}

const initialState: CategoryState = {
    allCategories: [],
    categoryProducts: {},
    categoryDetails: {},
    allProducts: {},
    loading: false,
}

export function CategoryReducer(state: CategoryState = initialState, action: any){
    switch (action.type){
        case categoryAction.SET_ALL_CATEGORIES:
            return {
                ...state,
                allCategories: action.payload.catArr,
                categoryDetails: action.payload.categoryDetails,
                categoryProducts: {...state.categoryProducts, ...action.payload.categoryProducts},
                allProducts: {...state.allProducts, ...action.payload.prodArr},
            };
        case categoryAction.SET_LOADING:
            return {
                ...state,
                loading: action.payload.loading,
            }
        default:
            return state;
    }
}