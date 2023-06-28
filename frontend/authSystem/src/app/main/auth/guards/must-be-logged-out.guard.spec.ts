import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mustBeLoggedOutGuard } from './must-be-logged-out.guard';

describe('mustBeLoggedOutGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mustBeLoggedOutGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
