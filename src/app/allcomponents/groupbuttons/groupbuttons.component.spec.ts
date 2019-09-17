import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupbuttonsComponent } from './groupbuttons.component';

describe('GroupbuttonsComponent', () => {
  let component: GroupbuttonsComponent;
  let fixture: ComponentFixture<GroupbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
