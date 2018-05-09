import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCamperComponent } from './new-camper.component';

describe('NewCamperComponent', () => {
  let component: NewCamperComponent;
  let fixture: ComponentFixture<NewCamperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCamperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCamperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
