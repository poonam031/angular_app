import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainInward } from './grain-inward';

describe('GrainInward', () => {
  let component: GrainInward;
  let fixture: ComponentFixture<GrainInward>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrainInward]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrainInward);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
