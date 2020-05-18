import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormReactiveComponent } from './contact-form-reactive.component';

describe('ContactFormReactiveComponent', () => {
  let component: ContactFormReactiveComponent;
  let fixture: ComponentFixture<ContactFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
