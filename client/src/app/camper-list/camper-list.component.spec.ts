import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamperListComponent } from './camper-list.component';

describe('CamperListComponent', () => {
  let component: CamperListComponent;
  let fixture: ComponentFixture<CamperListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamperListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
