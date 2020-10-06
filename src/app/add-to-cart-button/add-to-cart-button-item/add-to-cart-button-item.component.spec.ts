import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartButtonItemComponent } from './add-to-cart-button-item.component';

describe('AddToCartButtonItemComponent', () => {
  let component: AddToCartButtonItemComponent;
  let fixture: ComponentFixture<AddToCartButtonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCartButtonItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartButtonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
