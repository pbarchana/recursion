// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
	var results = [];
	//The childNodes property returns a collection of a node's child nodes, as a NodeList.
	var root = document.body.childNodes;

	var traverse = function(nodeList){
		_.each(nodeList, function (node, index, nodeList) {
			if (node.classList){
				if(node.classList.contains(className)){
					results.push(node)
				}
			}
			if(node.childNodes) {
				traverse(node.childNodes);
			}
		});
	};
	traverse(root);

	return results;
}
