import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjListComponent } from './proj-list.component';

describe('ProjListComponent', () => {
  let component: ProjListComponent;
  let fixture: ComponentFixture<ProjListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
