import { TestBed, inject } from '@angular/core/testing';

import { WebservicesService } from './webservices.service';

describe('WebservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebservicesService]
    });
  });

  it('should be created', inject([WebservicesService], (service: WebservicesService) => {
    expect(service).toBeTruthy();
  }));
});
