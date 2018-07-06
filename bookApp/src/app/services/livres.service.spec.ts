import { TestBed, inject } from '@angular/core/testing';

import { LivresService } from './livres.service';

describe('LivresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivresService]
    });
  });

  it('should be created', inject([LivresService], (service: LivresService) => {
    expect(service).toBeTruthy();
  }));
});
