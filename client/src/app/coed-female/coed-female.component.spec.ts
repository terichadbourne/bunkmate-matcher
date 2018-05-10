import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoedFemaleComponent } from './coed-female.component';

describe('CoedFemaleComponent', () => {
  let component: CoedFemaleComponent;
  let fixture: ComponentFixture<CoedFemaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoedFemaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoedFemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
