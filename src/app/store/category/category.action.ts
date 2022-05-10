import { Action } from "@ngrx/store";

export const SET_ALL_CATEGORIES = "SET_ALL_CATEGORIES"

export class setAllCategory implements Action{
    readonly type = SET_ALL_CATEGORIES;

    constructor(public payload: any[]){}
}

export type CategoryActions = setAllCategory