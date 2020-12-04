import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  garments: Product[] = [
    {
      name: "Miami Heat - Jimmy Butler",
      type: "Camiseta",
      price: 1900,
      stock: 3,
      image: "assets/images/jimmy-buttler.png",
      clearance: false,
      quantity: 0,

    },
    {
      name: "Dallas Mavericks - Luka Doncic",
      type: "Remera",
      price: 2100,
      stock: 2,
      image: "assets/images/doncic.jpg",
      clearance: true,
      quantity: 0,
    },
    {
      name: "Los Angeles Lakers",
      type: "Short",
      price: 1300,
      stock: 0,
      image: "assets/images/lakers-short.jpg",
      clearance: false,
      quantity: 0,

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  maxReached(m: string) {
    alert(m);
  }

}
