import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopchartsComponent } from './topcharts.component';

describe('TopchartsComponent', () => {
  let component: TopchartsComponent;
  let fixture: ComponentFixture<TopchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopchartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
