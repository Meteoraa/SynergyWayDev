import { Injectable } from '@angular/core';
import { Product } from './products.service';

const cartKey: string = "gamesCart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartItem[] = [];

  constructor() { 
    let cart = localStorage.getItem(cartKey);

    if (cart){
      this.cart = JSON.parse(cart);
    }
  }

  public getCartItems(): CartItem[]{
    return this.cart;
  }

  public addToCart(product: Product){
    let isInCartAlready = false;
    for (let i = 0; i < this.cart.length; i++){
     if (this.cart[i].product.id == product.id){
      isInCartAlready = true;
      this.cart[i].quantity++;
      break;
     } 
    }

    if (!isInCartAlready){
      this.cart.push({
        product: product,
        quantity: 1 
      })
    }

    this.saveToLocalStorage();
  }

  public removeFromCart(index: number){
    this.cart.splice(index, 1);
    this.saveToLocalStorage();
  }

  public getTotalPrice(): number{
    let total = 0;
    for (let i = 0; i < this.cart.length; i++){
      total += this.cart[i].product.price * this.cart[i].quantity;
    }
    return total;
  }
  public getTotalQuantity(): number{
    let total = 0;
    for (let i = 0; i < this.cart.length; i++){
      total += this.cart[i].quantity;
    }
    return total;
  }

  public quantityChanged(){
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(){
    localStorage.setItem(cartKey, JSON.stringify(this.cart));
  }
}

 export class CartItem{
  product: Product;
  quantity: number;
}