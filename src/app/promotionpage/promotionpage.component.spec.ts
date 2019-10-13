import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionpageComponent } from './promotionpage.component';

describe('PromotionpageComponent', () => {
  let component: PromotionpageComponent;
  let fixture: ComponentFixture<PromotionpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
