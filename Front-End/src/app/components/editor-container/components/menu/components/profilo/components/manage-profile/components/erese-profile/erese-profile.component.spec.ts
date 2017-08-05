import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EreseProfileComponent } from './erese-profile.component';

describe('EreseProfileComponent', () => {
  let component: EreseProfileComponent;
  let fixture: ComponentFixture<EreseProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EreseProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EreseProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
