import { TestBed } from '@angular/core/testing';

import { SobaServiceService } from './soba-service.service';

describe('SobaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SobaServiceService = TestBed.get(SobaServiceService);
    expect(service).toBeTruthy();
  });
});
