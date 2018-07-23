import { TestBed, inject } from '@angular/core/testing';

import { NodeService } from './node.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('NodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodeService, HttpClient, HttpHandler],
      
    });
  });

  it('should be created', inject([NodeService], (service: NodeService) => {
    expect(service).toBeTruthy();
  }));
});
