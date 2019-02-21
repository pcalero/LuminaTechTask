import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TreeOfLifeService } from './tree-of-life.service';

describe('TreeOfLifeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule]
  }));

  it('should be created', () => {
    const service: TreeOfLifeService = TestBed.get(TreeOfLifeService);
    expect(service).toBeTruthy();
  });
});
