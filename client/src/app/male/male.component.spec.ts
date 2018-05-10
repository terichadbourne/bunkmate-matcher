import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleComponent } from './male.component';

describe('MaleComponent', () => {
  let component: MaleComponent;
  let fixture: ComponentFixture<MaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
