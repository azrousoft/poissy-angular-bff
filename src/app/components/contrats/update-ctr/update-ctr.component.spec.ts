import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCtrComponent } from './update-ctr.component';

describe('UpdateCtrComponent', () => {
  let component: UpdateCtrComponent;
  let fixture: ComponentFixture<UpdateCtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCtrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
