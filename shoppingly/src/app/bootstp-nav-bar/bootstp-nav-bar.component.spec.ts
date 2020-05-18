import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstpNavBarComponent } from './bootstp-nav-bar.component';

describe('BootstpNavBarComponent', () => {
  let component: BootstpNavBarComponent;
  let fixture: ComponentFixture<BootstpNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstpNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstpNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
