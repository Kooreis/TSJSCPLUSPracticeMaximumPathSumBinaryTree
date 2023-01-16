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