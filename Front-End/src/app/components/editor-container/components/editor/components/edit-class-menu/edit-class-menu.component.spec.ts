import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassMenuComponent } from './edit-class-menu.component';

describe('EditClassMenuComponent', () => {
  let component: EditClassMenuComponent;
  let fixture: ComponentFixture<EditClassMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClassMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
