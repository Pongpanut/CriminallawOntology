/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsertabComponent } from './usertab.component';

describe('UsertabComponent', () => {
  let component: UsertabComponent;
  let fixture: ComponentFixture<UsertabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
