import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductCardItemComponent } from './single-product-card-item.component';

describe('SingleProductCardItemComponent', () => {
  let component: SingleProductCardItemComponent;
  let fixture: ComponentFixture<SingleProductCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProductCardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProductCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
