import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPswComponent } from './mod-psw.component';

describe('ModPswComponent', () => {
  let component: ModPswComponent;
  let fixture: ComponentFixture<ModPswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModPswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
