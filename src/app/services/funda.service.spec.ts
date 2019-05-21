import { TestBed } from '@angular/core/testing';

import { FundaService } from './funda.service';
import { HttpClientModule } from '@angular/common/http';

describe('FundaService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientModule] })
  );

  it('should be created', () => {
    const service: FundaService = TestBed.get(FundaService);
    expect(service).toBeTruthy();
  });
});
