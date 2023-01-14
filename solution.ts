Here is a TypeScript solution for finding the maximum path sum in a binary tree:

```typescript
class Node {
    left: Node | null = null;
    right: Node | null = null;
    constructor(public value: number) {}
}

class BinaryTree {
    root: Node | null = null;

    maxPathSum(): number {
        let maxSum = Number.NEGATIVE_INFINITY;
        const calculate = (node: Node | null): number => {
            if (node === null) return 0;
            let left = Math.max(0, calculate(node.left));
            let right = Math.max(0, calculate(node.right));
            maxSum = Math.max(maxSum, left + right + node.value);
            return Math.max(left, right) + node.value;
        };
        calculate(this.root);
        return maxSum;
    }
}

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(2);
tree.root.right = new Node(10);
tree.root.left.left = new Node(20);
tree.root.left.right = new Node(1);
tree.root.right.right = new Node(-25);
tree.root.right.right.left = new Node(3);
tree.root.right.right.right = new Node(4);
console.log(tree.maxPathSum());
```

This TypeScript solution defines a `Node` class for the nodes of the binary tree and a `BinaryTree` class for the binary tree itself. The `BinaryTree` class has a `maxPathSum` method that calculates the maximum path sum in the binary tree. The `maxPathSum` method uses a helper function `calculate` that recursively calculates the maximum path sum that can be obtained starting from the current node and going down. The maximum path sum is updated at each node. The `maxPathSum` method returns the maximum path sum in the binary tree.