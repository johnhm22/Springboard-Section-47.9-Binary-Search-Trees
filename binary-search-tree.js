class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  traverse(node=this.root){
    if(node.left) this.traverse(node.left);
    if(node.right) this.traverse(node.right);
    return node
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  //  This function should insert a node in a binary tree. It should return the BinarySearchTree and should be solved using iteration.
  insert(val) {
    let newNode = new Node(val);
    if(this.root === null){
      this.root = newNode;
      return this;
    }
    let currentNode = this.root
    while(currentNode != newNode){
       if(currentNode.val < val && currentNode.right === null){
          currentNode.right = newNode;
        } 
        else if (currentNode.val > val && currentNode.left === null) {
           currentNode.left = newNode;
        }
        else if(currentNode.val < val){
          currentNode = currentNode.right}
        else if(currentNode.val > val){
           currentNode = currentNode.left}
    }
    return this;
  }



  // var binarySearchTree = new BinarySearchTree();
  // binarySearchTree.insert(15);
  // binarySearchTree.insert(20);
  // binarySearchTree.insert(10);
  // binarySearchTree.insert(12);
  // binarySearchTree.root.value // 15
  // binarySearchTree.root.right.value // 20
  // binarySearchTree.root.left.right.value // 12

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

   insertRecursively(val) {
    let newNode = new Node(val);
    if(this.root === null){
      this.root = newNode;
      console.log("newNode set to root");
      return this;
    }
    let currentNode = this.root
       function findCurrentNode(currentNode){
        console.log(currentNode.val)
         if(currentNode.val < val && currentNode.right === null){
              currentNode.right = newNode;
              console.log("On the right side");
            } 
         else if (currentNode.val > val && currentNode.left === null) {
               currentNode.left = newNode;
            }
            if(currentNode.val < val) findCurrentNode(currentNode.right)
            if(currentNode.val > val) findCurrentNode(currentNode.left)
        
                }
        findCurrentNode(currentNode);
        return this;
   }

  // /** find(val): search the tree for a node with value val.
  //  * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while(currentNode){
      console.log("VISITING: ", currentNode.val);
      if(currentNode.val === val) return currentNode;
      if(currentNode === null) return undefined;
      if(currentNode.val > val){
        currentNode = currentNode.left
        console.log("currentNode: ", currentNode)
      } else{
        currentNode = currentNode.right
        console.log("currentNode: ", currentNode)
      }
    }
  }

  // /** findRecursively(val): search the tree for a node with value val.
  //  * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    let currentNode = this.root;
    function findVal(val){
        console.log("VISITING: ", currentNode.val);
        if(currentNode.val === val) return currentNode;
//         if(currentNode === null) return undefined;
        if(currentNode.val > val){
            currentNode = currentNode.left
        } else {
            currentNode = currentNode.right
        }
          if(currentNode === null) return undefined
          if(currentNode.val < val) findVal(currentNode.right)
          if(currentNode.val > val) findVal(currentNode.left)
    }
    findVal(val)
    return currentNode;
  }

  // /** dfsPreOrder(): Traverse the array using pre-order DFS.
  //  * Return an array of visited nodes. */

  dfsPreOrder(node=this.root){
    const valuesArray = [];
    const currentNode = this.root
    function createArray(currentNode){
    valuesArray.push(currentNode.val)
    if(currentNode.left) createArray(currentNode.left);
    if(currentNode.right) createArray(currentNode.right);
    }
    createArray(currentNode);
    return valuesArray;
}

  // /** dfsInOrder(): Traverse the array using in-order DFS.
  //  * Return an array of visited nodes. */

  dfsInOrder(node=this.root){
    const valuesArray = [];
    const currentNode = this.root
    function createArray(currentNode){
    if(currentNode.left) createArray(currentNode.left);
    console.log(currentNode.val)
    valuesArray.push(currentNode.val)
    if(currentNode.right) createArray(currentNode.right);
    }
    createArray(currentNode);
    return valuesArray;
}

  // /** dfsPostOrder(): Traverse the array using post-order DFS.
  //  * Return an array of visited nodes. */

  dfsPostOrder(node=this.root){
    const valuesArray = [];
    const currentNode = this.root
    function createArray(currentNode){
    if(currentNode.left) createArray(currentNode.left);
    if(currentNode.right) createArray(currentNode.right);
    console.log(currentNode.val)
    valuesArray.push(currentNode.val)
    }
    createArray(currentNode);
    return valuesArray;
}

  // /** bfs(): Traverse the array using BFS.
  //  * Return an array of visited nodes. */

  bfs(node=this.root){
    const valuesArray = [];
    let toVisitQueue = [this.root];

    while(toVisitQueue.length){
        let current = toVisitQueue.shift();
        valuesArray.push(current.val)
         if(current.left) toVisitQueue.push(current.left);
         if(current.right) toVisitQueue.push(current.right);
        //  console.log(current.val)
            }
     return valuesArray;
    }

  // /** Further Study!
  //  * remove(val): Removes a node in the BST with the value val.
  //  * Returns the removed node. */

  // remove(val) {

  // }

  // /** Further Study!
  //  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  // /** Further Study!
  //  * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //  * Otherwise return undefined. */

  // findSecondHighest() {
    
  // }
}

module.exports = BinarySearchTree;
