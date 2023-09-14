import { TestBed } from '@angular/core/testing';

import { TachesRestService } from './taches-rest.service';

describe('TachesRestService', () => {
  let service: TachesRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TachesRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
