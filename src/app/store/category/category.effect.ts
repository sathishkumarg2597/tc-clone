import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, map, of, catchError } from "rxjs";

import * as categoryActions from "./category.action";

@Injectable()
export class CategoryEffect{
    @Effect()
    getAllCategories = this.action$.pipe(
        ofType(categoryActions.GET_ALL_CATEGORIES),
        switchMap((data: categoryActions.getAllCategory) => {
            new categoryActions.setLoading(true);
            return this.http.get<any[]>("https://api.tendercuts.in/catalog/product/?store_id=1")
            .pipe(map(items=>{
            let catArr:any[] = []
            let categoryProducts: any = {}
            let categoryDetails:any = {}
            let prodArr: any = {}
            items.map((item: any)=>{
                catArr = [...catArr, item.category]
                categoryDetails[item?.category?.url_key] = item.category;
                categoryProducts[item?.category?.url_key] = item.products.map((product: any) => product?.entity_id)
                    item.products.map((product: any) => {
                      prodArr[product?.entity_id] = {...product, quantity: 0}
                    })
            })
            new categoryActions.setLoading(true);
            return new categoryActions.setAllCategory({catArr, categoryProducts, prodArr, categoryDetails});
        }),
        catchError(err => {
            return of();
        })
        );
        },
        )
    )

    constructor(private action$: Actions, private http: HttpClient) {}
}