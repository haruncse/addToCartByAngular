import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCartItemsComponent } from './small-cart-items.component';

describe('SmallCartItemsComponent', () => {
  let component: SmallCartItemsComponent;
  let fixture: ComponentFixture<SmallCartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCartItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
