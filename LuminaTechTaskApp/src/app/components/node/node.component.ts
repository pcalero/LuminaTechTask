import { Component, OnInit, Input } from '@angular/core';
import { TreeOfLifeService } from '../../services/tree-of-life.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  @Input() node: Node;

  constructor(private treeOfLifeService: TreeOfLifeService) { }

  ngOnInit() {
  }

  showChildNodes(node): void {
    this.treeOfLifeService.getSubtree(node.node_id)
      .subscribe(subtree => {
        if(subtree.arguson.children){
          node.children = subtree.arguson.children;
        }
      });
  }


}
