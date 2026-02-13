import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashSale } from './cash-sale';

describe('CashSale', () => {
  let component: CashSale;
  let fixture: ComponentFixture<CashSale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashSale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashSale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
