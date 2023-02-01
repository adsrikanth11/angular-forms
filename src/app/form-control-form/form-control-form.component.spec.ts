import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlFormComponent } from './form-control-form.component';

describe('FormControlFormComponent', () => {
  let component: FormControlFormComponent;
  let fixture: ComponentFixture<FormControlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
