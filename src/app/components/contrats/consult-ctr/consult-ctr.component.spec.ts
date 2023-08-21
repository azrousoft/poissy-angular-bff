import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCtrComponent } from './consult-ctr.component';

describe('ConsultCtrComponent', () => {
  let component: ConsultCtrComponent;
  let fixture: ComponentFixture<ConsultCtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultCtrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultCtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
