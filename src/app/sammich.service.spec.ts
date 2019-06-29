import { TestBed } from '@angular/core/testing';

import { SammichService } from './sammich.service';

describe('SammichService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SammichService = TestBed.get(SammichService);
    expect(service).toBeTruthy();
  });
});
