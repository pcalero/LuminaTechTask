import { Component, OnInit } from '@angular/core';
import { TreeOfLifeService } from '../../services/tree-of-life.service';
import { Tree } from '../../models/tree';
import { Constants } from '../../common/constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tree: Tree;
  title: string;
  footerText: string;

  constructor(private treeOfLifeService: TreeOfLifeService) { }

  ngOnInit() {
    this.title = Constants.APP_TITLE;
    this.footerText = Constants.FOOTER_TEXT;
    this.getFirstNode();
  }

  getFirstNode(): void {
    this.treeOfLifeService.getTree()
      .subscribe(tree => {
        this.tree = tree;
      });
  }

  
}
