import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoedMaleComponent } from './coed-male.component';

describe('CoedMaleComponent', () => {
  let component: CoedMaleComponent;
  let fixture: ComponentFixture<CoedMaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoedMaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoedMaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
