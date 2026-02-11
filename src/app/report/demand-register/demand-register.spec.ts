import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandRegister } from './demand-register';

describe('DemandRegister', () => {
  let component: DemandRegister;
  let fixture: ComponentFixture<DemandRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
