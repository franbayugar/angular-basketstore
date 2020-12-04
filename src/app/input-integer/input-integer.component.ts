import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  quantity: number;
  @Input()
  max: number;
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
  }
  upQuantity() {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit('Se alcanzó el máximo');
    }

  }
  downQuantity() {
    if (this.quantity > 0)
      this.quantity--;
    this.quantityChange.emit(this.quantity);

  }
  changeQuantity(event) {

    if (event.key >= 0 || event.key <= 9 || event.key == "Backspace") {
      if (this.quantity > this.max) {
        event.preventDefault();
        this.quantity = this.max;
        this.quantityChange.emit(this.quantity);

      }
    }
    else {
      event.preventDefault();
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);

    }
  }
}
