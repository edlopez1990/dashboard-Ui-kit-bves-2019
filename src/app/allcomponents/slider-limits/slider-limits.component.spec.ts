import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderLimitsComponent } from './slider-limits.component';

describe('SliderLimitsComponent', () => {
  let component: SliderLimitsComponent;
  let fixture: ComponentFixture<SliderLimitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderLimitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
