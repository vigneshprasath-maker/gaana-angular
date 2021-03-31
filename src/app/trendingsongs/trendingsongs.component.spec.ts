import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingsongsComponent } from './trendingsongs.component';

describe('TrendingsongsComponent', () => {
  let component: TrendingsongsComponent;
  let fixture: ComponentFixture<TrendingsongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingsongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
