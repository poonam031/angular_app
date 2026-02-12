import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBook } from './stock-book';

describe('StockBook', () => {
  let component: StockBook;
  let fixture: ComponentFixture<StockBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
