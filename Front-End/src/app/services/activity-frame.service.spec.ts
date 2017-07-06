import { TestBed, inject } from '@angular/core/testing';

import { ActivityFrameService } from './activity-frame.service';

describe('ActivityFrameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityFrameService]
    });
  });

  it('should be created', inject([ActivityFrameService], (service: ActivityFrameService) => {
    expect(service).toBeTruthy();
  }));
});
