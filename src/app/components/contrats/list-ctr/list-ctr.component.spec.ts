import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCtrComponent } from './list-ctr.component';

describe('ListCtrComponent', () => {
  let component: ListCtrComponent;
  let fixture: ComponentFixture<ListCtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCtrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
