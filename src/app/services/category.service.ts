import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class CategoryService {
    categoryProducts: any = {}
    allProducts: any = {}
    allCategories: any = {}

    constructor(private http: HttpClient) { }

    getAllCategory() {
        return this.http.get<any[]>("https://api.tendercuts.in/catalog/product/?store_id=1").pipe(tap(items=>{
            items.map(item=>{
                this.allCategories[item.category.url_key] = item.category
            })
        }));
    }

    getTopPicks() {
        return this.http.get<any[]>("https://api.tendercuts.in/recommender/top_picks?store_id=1");
    }

    getProductById(id: number){
        return this.allProducts[id];
    }

    getProductDescById(id: number){
        return this.http.get(`https://api.tendercuts.in/catalog/description/?store_id=1&product_id=${id}`);
    }

    getProductByUrlKey(id: number){
        return this.allProducts[id];
    }

    getCategoryByUrlKey(urlKey: string){
        return this.allCategories[urlKey];
    }
}