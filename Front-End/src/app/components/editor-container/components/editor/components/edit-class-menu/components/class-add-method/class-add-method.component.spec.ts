import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAddMethodComponent } from './class-add-method.component';

describe('ClassAddMethodComponent', () => {
  let component: ClassAddMethodComponent;
  let fixture: ComponentFixture<ClassAddMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassAddMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAddMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
