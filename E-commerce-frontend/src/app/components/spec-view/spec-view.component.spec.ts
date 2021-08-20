import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecViewComponent } from './spec-view.component';

describe('SpecViewComponent', () => {
  let component: SpecViewComponent;
  let fixture: ComponentFixture<SpecViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
