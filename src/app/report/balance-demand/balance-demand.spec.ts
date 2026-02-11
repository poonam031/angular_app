import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceDemand } from './balance-demand';

describe('BalanceDemand', () => {
  let component: BalanceDemand;
  let fixture: ComponentFixture<BalanceDemand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceDemand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceDemand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
