import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoedComponent } from './coed.component';

describe('CoedComponent', () => {
  let component: CoedComponent;
  let fixture: ComponentFixture<CoedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
