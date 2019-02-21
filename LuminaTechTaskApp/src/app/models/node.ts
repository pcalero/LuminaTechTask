/**
 * Node model
 * 
 * @export
 * @class Node
 * @author pedro.calero
 */
export class Node {
  node_id: string;
  num_tips: number;
  
  taxon: {
    name: string;
    ott_id: number;
    rank: string;
    tax_sources: Array<string>;
    unique_name: string;
  }
  children: Array<Node>;

  /**
   * Creates an instance of Node.
   * @memberof Node
   */
  constructor (){
  }

}