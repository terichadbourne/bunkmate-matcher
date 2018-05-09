import { TestBed, inject } from '@angular/core/testing';

import { CamperService } from './camper.service';

describe('CamperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamperService]
    });
  });

  it('should be created', inject([CamperService], (service: CamperService) => {
    expect(service).toBeTruthy();
  }));
});
