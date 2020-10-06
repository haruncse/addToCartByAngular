import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductListTableItemsComponent } from './cart-product-list-table-items.component';

describe('CartProductListTableItemsComponent', () => {
  let component: CartProductListTableItemsComponent;
  let fixture: ComponentFixture<CartProductListTableItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartProductListTableItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductListTableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
