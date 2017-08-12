import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAddMainMethodComponent } from './class-add-main-method.component';

describe('ClassAddMainMethodComponent', () => {
  let component: ClassAddMainMethodComponent;
  let fixture: ComponentFixture<ClassAddMainMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassAddMainMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAddMainMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
