import { Component, OnInit } from '@angular/core';
import { GarmentCartService } from '../garment-cart.service';
import { GarmentDataService } from '../garment-data.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  garments: Product[] = [];

  constructor(private cart: GarmentCartService,
    private garmentsDataService: GarmentDataService) {

  }

  ngOnInit(): void {
    this.garmentsDataService.getAll()
      .subscribe(garments => this.garments = garments);
  }
  maxReached(m: string) {
    alert(m);
  }

  addToCart(garment): void {
    this.cart.addToCart(garment);
    garment.stock -= garment.quantity;
    garment.quantity = 0;
  }

}
