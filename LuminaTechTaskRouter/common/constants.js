// -----------------------------------------------------------------------------
// constants.js: definition constants for the whole project
//
// author: pedro.calero
// -----------------------------------------------------------------------------

var path = require('path');

function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

// Tree of Life API methods
define ("TREE_OF_LIFE_API_ABOUT_URL", "https://api.opentreeoflife.org/v3/tree_of_life/about");
define ("TREE_OF_LIFE_API_SURTREE_URL", "https://api.opentreeoflife.org/v3/tree_of_life/subtree");
  
  