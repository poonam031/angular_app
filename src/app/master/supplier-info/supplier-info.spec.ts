import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierInfo } from './supplier-info';

describe('SupplierInfo', () => {
  let component: SupplierInfo;
  let fixture: ComponentFixture<SupplierInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
