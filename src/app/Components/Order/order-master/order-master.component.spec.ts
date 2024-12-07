import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMAsterComponent } from './order-master.component';

describe('OrderMAsterComponent', () => {
  let component: OrderMAsterComponent;
  let fixture: ComponentFixture<OrderMAsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderMAsterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderMAsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
