import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-list/product'
import { tap } from 'rxjs/operators'

const URL = 'https://garment-f6fa1-default-rtdb.firebaseio.com/garments.json';

@Injectable({
  providedIn: 'root'
})
export class GarmentDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URL)
      .pipe(
        tap((garments: Product[]) => garments.forEach(garment => garment.quantity = 0))
      );
    //consumir api rest
  }
}


