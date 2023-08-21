import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCtrComponent } from './add-ctr.component';

describe('AddCtrComponent', () => {
  let component: AddCtrComponent;
  let fixture: ComponentFixture<AddCtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCtrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
