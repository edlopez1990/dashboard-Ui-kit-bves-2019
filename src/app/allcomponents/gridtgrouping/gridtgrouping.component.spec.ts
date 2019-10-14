import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridtgroupingComponent } from './gridtgrouping.component';

describe('GridtgroupingComponent', () => {
  let component: GridtgroupingComponent;
  let fixture: ComponentFixture<GridtgroupingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridtgroupingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridtgroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
