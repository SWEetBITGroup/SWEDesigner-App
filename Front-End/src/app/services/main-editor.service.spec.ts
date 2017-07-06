import { TestBed, inject } from '@angular/core/testing';

import { MainEditorService } from './main-editor.service';

describe('MainEditorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainEditorService]
    });
  });

  it('should be created', inject([MainEditorService], (service: MainEditorService) => {
    expect(service).toBeTruthy();
  }));
});
