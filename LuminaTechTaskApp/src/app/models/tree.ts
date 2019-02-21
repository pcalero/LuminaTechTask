import { Node } from './node';

/**
 * Tree model
 * 
 * @export
 * @class Tree
 * @author pedro.calero
 */
export class Tree {
  date_created: Date;
  filtered_flags: Array<string>;
  num_source_studies: number;
  num_source_trees: number;
  root: Node;

  /**
   * Creates an instance of Tree.
   * @memberof Tree
   */
  constructor (){
  }

}