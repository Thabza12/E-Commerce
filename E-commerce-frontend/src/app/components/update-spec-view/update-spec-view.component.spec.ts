import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpecViewComponent } from './update-spec-view.component';

describe('UpdateSpecViewComponent', () => {
  let component: UpdateSpecViewComponent;
  let fixture: ComponentFixture<UpdateSpecViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSpecViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSpecViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
