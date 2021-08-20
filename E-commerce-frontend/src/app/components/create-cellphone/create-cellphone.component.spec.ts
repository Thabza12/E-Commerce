import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCellphoneComponent } from './create-cellphone.component';

describe('CreateCellphoneComponent', () => {
  let component: CreateCellphoneComponent;
  let fixture: ComponentFixture<CreateCellphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCellphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCellphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
