import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCtrComponent } from './nav-ctr.component';

describe('NavCtrComponent', () => {
  let component: NavCtrComponent;
  let fixture: ComponentFixture<NavCtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCtrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
