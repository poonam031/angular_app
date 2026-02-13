import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditSale } from './credit-sale';

describe('CreditSale', () => {
  let component: CreditSale;
  let fixture: ComponentFixture<CreditSale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditSale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditSale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
