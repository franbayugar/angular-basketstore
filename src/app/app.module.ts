import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { StoreAboutComponent } from './store-about/store-about.component';
import { CartComponent } from './cart/cart.component';
import { ProductGarmentsComponent } from './product-garments/product-garments.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StoreAboutComponent,
    CartComponent,
    ProductGarmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
