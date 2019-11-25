import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridtoolbarComponent } from './gridtoolbar.component';

describe('GridtoolbarComponent', () => {
  let component: GridtoolbarComponent;
  let fixture: ComponentFixture<GridtoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridtoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridtoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
