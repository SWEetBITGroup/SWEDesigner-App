import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassListMethodComponent } from './class-list-method.component';

describe('ClassListMethodComponent', () => {
  let component: ClassListMethodComponent;
  let fixture: ComponentFixture<ClassListMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassListMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassListMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
