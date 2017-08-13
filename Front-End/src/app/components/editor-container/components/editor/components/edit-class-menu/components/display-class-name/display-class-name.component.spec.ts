import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayClassNameComponent } from './display-class-name.component';

describe('DisplayClassNameComponent', () => {
  let component: DisplayClassNameComponent;
  let fixture: ComponentFixture<DisplayClassNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayClassNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayClassNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
