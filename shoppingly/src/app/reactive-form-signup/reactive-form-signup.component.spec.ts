import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormSignupComponent } from './reactive-form-signup.component';

describe('ReactiveFormSignupComponent', () => {
  let component: ReactiveFormSignupComponent;
  let fixture: ComponentFixture<ReactiveFormSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
