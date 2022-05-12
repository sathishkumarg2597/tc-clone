import { Action } from "@ngrx/store";

export const UPDATE_CART = "UPDATE_CART";
export const ADD_CART = "ADD_CART";

export class updateCart implements Action{
    readonly type = UPDATE_CART;
    constructor(public payload: any[]){}
}

export class addCart implements Action{
    readonly type = ADD_CART;
    constructor(public payload: any){}
}

export type CartActions = updateCart | addCart