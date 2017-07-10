import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityMenuComponent } from './activity-menu.component';

describe('ActivityMenuComponent', () => {
  let component: ActivityMenuComponent;
  let fixture: ComponentFixture<ActivityMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
