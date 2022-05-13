import { TestBed } from "@angular/core/testing"
import { CheckoutComponent } from "./checkout.component"

describe("CheckoutComponent", ()=>{
    TestBed.configureTestingModule({
        declarations: [CheckoutComponent],
    })
    it("Check the tab is linear", ()=>{
        let component = TestBed.createComponent(CheckoutComponent)
        let isLinear = component.componentInstance.isLinear;
        expect(isLinear).toBe(true)
    })
})