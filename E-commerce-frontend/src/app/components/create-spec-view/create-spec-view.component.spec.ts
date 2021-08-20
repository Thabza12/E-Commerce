import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpecViewComponent } from './create-spec-view.component';

describe('CreateSpecViewComponent', () => {
  let component: CreateSpecViewComponent;
  let fixture: ComponentFixture<CreateSpecViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSpecViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpecViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
