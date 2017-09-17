import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardHomeService } from './auth-guard-home.service';

describe('AuthGuardHomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardHomeService]
    });
  });

  it('should be created', inject([AuthGuardHomeService], (service: AuthGuardHomeService) => {
    expect(service).toBeTruthy();
  }));
});
