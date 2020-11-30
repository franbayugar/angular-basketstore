import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGarmentsComponent } from './product-garments.component';

describe('ProductGarmentsComponent', () => {
  let component: ProductGarmentsComponent;
  let fixture: ComponentFixture<ProductGarmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGarmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGarmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
