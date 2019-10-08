import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionboardComponent } from './promotionboard.component';

describe('PromotionboardComponent', () => {
  let component: PromotionboardComponent;
  let fixture: ComponentFixture<PromotionboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
