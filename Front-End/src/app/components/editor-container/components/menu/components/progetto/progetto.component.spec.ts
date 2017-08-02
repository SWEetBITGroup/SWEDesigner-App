import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgettoComponent } from './progetto.component';

describe('ProgettoComponent', () => {
  let component: ProgettoComponent;
  let fixture: ComponentFixture<ProgettoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgettoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
