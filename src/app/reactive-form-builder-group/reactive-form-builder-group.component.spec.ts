import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormBuilderGroupComponent } from './reactive-form-builder-group.component';

describe('ReactiveFormBuilderGroupComponent', () => {
  let component: ReactiveFormBuilderGroupComponent;
  let fixture: ComponentFixture<ReactiveFormBuilderGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormBuilderGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormBuilderGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
