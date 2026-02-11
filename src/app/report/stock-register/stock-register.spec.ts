import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRegister } from './stock-register';

describe('StockRegister', () => {
  let component: StockRegister;
  let fixture: ComponentFixture<StockRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
