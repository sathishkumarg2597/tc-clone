import { CartService } from "./cart.service"

describe("CartService", ()=>{
    it("Check cart is empty initally", ()=>{
        let cartService = new CartService();
        let cart = cartService.cartList;
        expect(cart.length).toBe(0)
    })

    it("Adding product to cart newly", ()=>{
        let cartService = new CartService()
        cartService.addToCart({
            entity_id: 123,
            name: "Chicken",
            price: 20,
        })
        expect(cartService.cartList.length).toBe(1);
    })

    it("Adding same product again to cart ", ()=>{
        let cartService = new CartService()
        cartService.addToCart({
            entity_id: 123,
            name: "Chicken",
            price: 20,
        })
        cartService.addToCart({
            entity_id: 123,
        })
        expect(cartService.cartList.length).toBe(1);
    })

    it("Removing product with quantity 1 from cart", ()=>{
        let cartService = new CartService()
        cartService.addToCart({
            entity_id: 123,
            name: "Chicken",
            price: 20,
        })
        cartService.removeCart({
            entity_id: 123,
        })
        expect(cartService.cartList.length).toBe(0);
    })

    it("Removing product with quantity 2 from cart", ()=>{
        let cartService = new CartService()
        //Add Product
        cartService.addToCart({
            entity_id: 123,
            name: "Chicken",
            price: 20,
        })
        //Adding same product makes quantity 2
        cartService.addToCart({
            entity_id: 123,
            name: "Chicken",
            price: 20,
        })
        //Removing 1 quantity
        cartService.removeCart({
            entity_id: 123,
        })
        expect(cartService.cartList.length).toBe(1);
    })
})