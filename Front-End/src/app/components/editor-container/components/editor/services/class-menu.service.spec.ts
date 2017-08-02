import { TestBed, inject } from '@angular/core/testing';

import { ClassMenuService } from './class-menu.service';

describe('ClassMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassMenuService]
    });
  });

  it('should be created', inject([ClassMenuService], (service: ClassMenuService) => {
    expect(service).toBeTruthy();
  }));
});
