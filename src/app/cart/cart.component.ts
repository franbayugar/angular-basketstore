import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GarmentCartService } from '../garment-cart.service';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList$: Observable<Product[]>;
  constructor(private cart: GarmentCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

}
