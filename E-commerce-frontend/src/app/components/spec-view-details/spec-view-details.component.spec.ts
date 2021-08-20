import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecViewDetailsComponent } from './spec-view-details.component';

describe('SpecViewDetailsComponent', () => {
  let component: SpecViewDetailsComponent;
  let fixture: ComponentFixture<SpecViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecViewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
