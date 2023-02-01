import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupFormComponent } from './form-group-form.component';

describe('FormGroupFormComponent', () => {
  let component: FormGroupFormComponent;
  let fixture: ComponentFixture<FormGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
