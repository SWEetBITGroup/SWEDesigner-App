import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModEmailComponent } from './mod-email.component';

describe('ModEmailComponent', () => {
  let component: ModEmailComponent;
  let fixture: ComponentFixture<ModEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
