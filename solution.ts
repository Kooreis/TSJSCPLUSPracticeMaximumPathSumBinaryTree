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