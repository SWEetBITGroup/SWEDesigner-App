import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeClassNameComponent } from './change-class-name.component';

describe('ChangeClassNameComponent', () => {
  let component: ChangeClassNameComponent;
  let fixture: ComponentFixture<ChangeClassNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeClassNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeClassNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
