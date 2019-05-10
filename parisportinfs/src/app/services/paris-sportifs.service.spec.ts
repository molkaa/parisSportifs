import { TestBed } from '@angular/core/testing';

import { ParisSportifsService } from './paris-sportifs.service';

describe('ParisSportifsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParisSportifsService = TestBed.get(ParisSportifsService);
    expect(service).toBeTruthy();
  });
});
