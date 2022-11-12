
let result ="";
function getElementByIdName(idName)
{ const nodes = document.body; 
  function getChildren(node){
    Object.keys(node.children).forEach((child)=>{
      let childNode = node.children[child];
      let attr = childNode.getAttribute('id');
      if (attr == idName){
    result = childNode;
      }
      getChildren(childNode);
    });
    return result;
  };
  getChildren(nodes);
}
getElementByIdName('pragati');
console.log(result);
