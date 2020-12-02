import { Component, Input, OnInit } from '@angular/core';
import { ProductGarmentsComponent } from '../product-garments/product-garments.component';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() {
  }
  @Input()
  garment: Product;

  ngOnInit(): void {
  }
  upQuantity(garment: Product) {
    if (garment.quantity < garment.stock)
      garment.quantity++;
  }
  downQuantity(garment: Product) {
    if (garment.quantity > 0)
      garment.quantity--;
  }
  changeQuantity(event, garment: Product) {

    if (event.key >= 0 || event.key <= 9 || event.key == "Backspace") {
      if (garment.quantity > garment.stock) {
        event.preventDefault();
        garment.quantity = garment.stock;
      }
    }
    else {
      event.preventDefault();
      garment.quantity = 0;
    }
  }
}
