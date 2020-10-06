import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTotalListTableItemsComponent } from './cart-total-list-table-items.component';

describe('CartTotalListTableItemsComponent', () => {
  let component: CartTotalListTableItemsComponent;
  let fixture: ComponentFixture<CartTotalListTableItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTotalListTableItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTotalListTableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
