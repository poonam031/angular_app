import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainDemand } from './grain-demand';

describe('GrainDemand', () => {
  let component: GrainDemand;
  let fixture: ComponentFixture<GrainDemand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrainDemand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrainDemand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
