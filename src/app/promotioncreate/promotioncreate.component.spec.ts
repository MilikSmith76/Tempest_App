import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotioncreateComponent } from './promotioncreate.component';

describe('PromotioncreateComponent', () => {
  let component: PromotioncreateComponent;
  let fixture: ComponentFixture<PromotioncreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotioncreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
