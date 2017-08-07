import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EraseProfileComponent } from './erase-profile.component';

describe('EreseProfileComponent', () => {
  let component: EraseProfileComponent;
  let fixture: ComponentFixture<EraseProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EraseProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EraseProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
