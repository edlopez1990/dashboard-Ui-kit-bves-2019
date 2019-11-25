import { TestBed } from '@angular/core/testing';

import { ChangueColorService } from './changue-color.service';

describe('ChangueColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangueColorService = TestBed.get(ChangueColorService);
    expect(service).toBeTruthy();
  });
});
