import * as categoryAction from "./category.action";

export interface CategoryState{
    allCategories: any[];
}

const initialState: CategoryState = {
    allCategories: [],
}

export function CategoryReducer(state: CategoryState = initialState, action: any){
    switch (action.type){
        case categoryAction.SET_ALL_CATEGORIES:
            return {
                ...state,
                allCategories: [...state.allCategories, action.payload]
            };
        default:
            return state;
    }
}