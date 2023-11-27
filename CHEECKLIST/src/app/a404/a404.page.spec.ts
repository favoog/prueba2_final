import { ComponentFixture, TestBed } from '@angular/core/testing';
import { A404Page } from './a404.page';

describe('A404Page', () => {
  let component: A404Page;
  let fixture: ComponentFixture<A404Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(A404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
