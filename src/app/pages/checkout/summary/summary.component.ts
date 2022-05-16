import { Component, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { CartService } from "src/app/services/cart.service";

@Component({
    selector: "app-summary",
    templateUrl: "./summary.component.html",
    styleUrls: ["./summary.component.scss"],
})
export class SummaryComponent implements OnInit, OnDestroy {
    cartList: any[] = [];
    subscription: Subscription;
    addressForm: FormGroup;

    constructor(private cartSrv: CartService) { }


    ngOnInit(): void {
        this.setCartData();
        this.addressForm = new FormGroup({
            doorNo: new FormControl("", [Validators.required, this.checkIsDoorNumber]),
            street: new FormControl("", Validators.required),
            city: new FormControl("", Validators.required),
            state: new FormControl("", Validators.required),
            country: new FormControl("", [Validators.required]),
            phone: new FormArray([])
        })
    }

    checkIsDoorNumber(control: AbstractControl){
        return control?.value.length > 4 ? { invalidDno: true } : null;
    }

    removeNumber(index: number) {
        this.addressForm.value.phone.splice(index, 1);
    }

    addPhoneNumber() {
        let newNumber = new FormGroup({
            number: new FormControl("", Validators.required)
        })
        this.addressForm.value.phone.push(newNumber)
    }

    setCartData() {
        this.cartList = this.cartSrv.cartList;
        this.subscription = this.cartSrv.cartUpdated.subscribe(item => {
            this.cartList = item
        })
    }

    onSubmit() {
        console.log(this.addressForm)
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}