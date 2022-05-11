import { Action } from "@ngrx/store";

export const SET_ALL_CATEGORIES = "SET_ALL_CATEGORIES"
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"
export const SET_LOADING = "SET_LOADING"

export class setAllCategory implements Action{
    readonly type = SET_ALL_CATEGORIES;
    constructor(public payload: any){}
}

export class getAllCategory implements Action{
    readonly type = GET_ALL_CATEGORIES;
}

export class setLoading implements Action{
    readonly type = SET_LOADING;
    constructor(public payload: boolean){ }
}

export type CategoryActions = setAllCategory | getAllCategory | setLoading