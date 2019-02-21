import { async, ComponentFixture, TestBed, inject  } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Tree } from '../../models/tree';
import { Observable, of } from 'rxjs';

import { MainComponent } from './main.component';
import { NodeComponent } from '../node/node.component';
import { TreeOfLifeService } from '../../services/tree-of-life.service';

const TREE_OBJECT: Tree = {
  "date_created": new Date("2018-09-24 11:39:29"),
  "filtered_flags": [],
  "num_source_studies": 951,
  "num_source_trees": 987,
  "root": {
    "node_id": "ott93302",
    "children": [],
    "num_tips": 2640941,
    "taxon": {
      "name": "cellular organisms",
      "ott_id": 93302,
      "rank": "no rank",
      "tax_sources": [
          "ncbi:131567"
      ],
      "unique_name": "cellular organisms"
    }
  }
};

class MockTreeOfLifeService {
  getTree(): Observable<Tree> {
    return of(TREE_OBJECT); 
  };
  getSubtree() {};
}

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [ 
        MainComponent,
        NodeComponent
      ],
      providers: [TreeOfLifeService],
      imports: [
        HttpClientModule,
        NgbModule
      ]
    });

    // Configure the component with another set of Providers
    TestBed.overrideComponent(
      MainComponent,
      { set: { providers: [{ provide: TreeOfLifeService, useClass: MockTreeOfLifeService }] } }
    ).compileComponents();
  }));

  beforeEach(() => {

    // create component and test fixture
    fixture = TestBed.createComponent(MainComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should obtains right value from mocked service', () => {
    component.ngOnInit();
    expect(component.tree).toEqual(TREE_OBJECT);
  });

});
