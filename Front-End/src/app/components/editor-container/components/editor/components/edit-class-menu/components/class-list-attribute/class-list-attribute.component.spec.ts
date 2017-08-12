import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassListAttributeComponent } from './class-list-attribute.component';

describe('ClassListAttributeComponent', () => {
  let component: ClassListAttributeComponent;
  let fixture: ComponentFixture<ClassListAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassListAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassListAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
