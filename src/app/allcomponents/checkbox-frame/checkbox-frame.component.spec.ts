import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFrameComponent } from './checkbox-frame.component';

describe('CheckboxFrameComponent', () => {
  let component: CheckboxFrameComponent;
  let fixture: ComponentFixture<CheckboxFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
