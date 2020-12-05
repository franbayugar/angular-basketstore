import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/product';


@Injectable({
  providedIn: 'root'
})
export class GarmentCartService {
  constructor() { }

  private _cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject([]);


  addToCart(garment: Product) {
    let item: Product = this._cartList.find((v1) => v1.name == garment.name);
    if (!item) {
      this._cartList.push({ ...garment });
    } else {
      item.quantity += garment.quantity;
    }
    console.log(this._cartList.length);
    this.cartList.next(this._cartList);
  }

}
