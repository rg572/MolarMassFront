import { TestBed } from '@angular/core/testing';

import { MolarMassService } from './molar-mass.service';

describe('MolarMassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MolarMassService = TestBed.get(MolarMassService);
    expect(service).toBeTruthy();
  });
});
