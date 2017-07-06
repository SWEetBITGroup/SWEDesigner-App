import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFrameComponent } from './activity-frame.component';

describe('ActivityFrameComponent', () => {
  let component: ActivityFrameComponent;
  let fixture: ComponentFixture<ActivityFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
