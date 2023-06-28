import { TestBed } from '@angular/core/testing';

import { TestTokenService } from './test-token.service';

describe('TestTokenService', () => {
  let service: TestTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
