import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAddAttributeComponent } from './class-add-attribute.component';

describe('ClassAddAttributeComponent', () => {
  let component: ClassAddAttributeComponent;
  let fixture: ComponentFixture<ClassAddAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassAddAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAddAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
