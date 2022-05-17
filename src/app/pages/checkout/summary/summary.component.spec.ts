import { DebugElement } from "@angular/core"
import { async, ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import { TextFieldComponent } from "src/app/components/textfield/textfield.component"
import { CartService } from "src/app/services/cart.service"
import { CategoryService } from "src/app/services/category.service"
import { SummaryComponent } from "./summary.component"

describe("Summary component", () => {
    let fixture: ComponentFixture<SummaryComponent>
    let component: SummaryComponent
    let element: DebugElement

    beforeAll(async(() => {
        TestBed.configureTestingModule({
            declarations: [SummaryComponent, TextFieldComponent],
            providers: [CartService, CategoryService]
        }).compileComponents()
        fixture = TestBed.createComponent(SummaryComponent)
        fixture.detectChanges();
        component = fixture.componentInstance
        element = fixture.debugElement
    }))


    it("Should component created", () => {
        expect(component).toBeTruthy()
    })

    it("Check cart is empty", () => {
        let cartService = fixture.debugElement.injector.get(CartService)
        expect(cartService?.cartList.length).toBe(1)
    })

    it("Add item to cart", () => {
        let cartService = fixture.debugElement.injector.get(CartService)
        cartService.addToCart({
            name: "Chicken",
            entity_id: 123,
        })
        fixture.detectChanges()
        let cartListElement = element.query(By.css('#name'))
        expect(cartListElement).not.toBeNull();
    })
})