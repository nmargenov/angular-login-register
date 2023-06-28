import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mustBeLoggedInGuard } from './must-be-logged-in.guard';

describe('mustBeLoggedInGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mustBeLoggedInGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
