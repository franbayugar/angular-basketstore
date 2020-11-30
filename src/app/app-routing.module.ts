import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductGarmentsComponent } from './product-garments/product-garments.component';
import { StoreAboutComponent } from './store-about/store-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'garments',
    pathMatch: 'full'
  },
  {
    path: 'garments',
    component: ProductGarmentsComponent
  },
  {
    path: 'about',
    component: StoreAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
