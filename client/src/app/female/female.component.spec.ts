import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleComponent } from './female.component';

describe('FemaleComponent', () => {
  let component: FemaleComponent;
  let fixture: ComponentFixture<FemaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
