Here is a JavaScript solution for finding the maximum path sum in a binary tree:

```javascript
class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let maxSum = Number.NEGATIVE_INFINITY;

function findMaxSum(root) {
    if (root === null) {
        return 0;
    }

    let left = Math.max(0, findMaxSum(root.left));
    let right = Math.max(0, findMaxSum(root.right));

    maxSum = Math.max(maxSum, left + right + root.val);

    return Math.max(left, right) + root.val;
}

function maxPathSum(root) {
    maxSum = Number.NEGATIVE_INFINITY;
    findMaxSum(root);
    return maxSum;
}

let root = new Node(10);
root.left = new Node(2);
root.right = new Node(10);
root.left.left = new Node(20);
root.left.right = new Node(1);
root.right.right = new Node(-25);
root.right.right.left = new Node(3);
root.right.right.right = new Node(4);

console.log("Maximum path sum is ", maxPathSum(root));
```

This script creates a binary tree and finds the maximum path sum in it. The `findMaxSum` function is a helper function that recursively finds the maximum sum of the path that can be extended to input binary tree's root node. The `maxPathSum` function uses this helper function to find the maximum path sum.