import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpromotionproductComponent } from './addpromotionproduct.component';

describe('AddpromotionproductComponent', () => {
  let component: AddpromotionproductComponent;
  let fixture: ComponentFixture<AddpromotionproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpromotionproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpromotionproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
