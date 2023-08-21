import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCtrComponent } from './item-ctr.component';

describe('ItemCtrComponent', () => {
  let component: ItemCtrComponent;
  let fixture: ComponentFixture<ItemCtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCtrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
