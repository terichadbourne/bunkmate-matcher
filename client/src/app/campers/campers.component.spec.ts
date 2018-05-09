import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampersComponent } from './campers.component';

describe('CampersComponent', () => {
  let component: CampersComponent;
  let fixture: ComponentFixture<CampersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
