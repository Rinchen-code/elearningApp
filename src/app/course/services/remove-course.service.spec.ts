import { TestBed } from '@angular/core/testing';

import { RemoveCourseService } from './remove-course.service';

describe('RemoveCourseService', () => {
  let service: RemoveCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
