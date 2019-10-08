import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductboardComponent } from './productboard.component';

describe('ProductboardComponent', () => {
  let component: ProductboardComponent;
  let fixture: ComponentFixture<ProductboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
