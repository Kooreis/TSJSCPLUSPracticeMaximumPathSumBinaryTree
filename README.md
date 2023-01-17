# Question: How do you find the maximum path sum in a binary tree? JavaScript Summary

The JavaScript code provided defines a class for a binary tree node and two functions to find the maximum path sum in a binary tree. The Node class constructor takes a value and optional left and right nodes, which default to null. The findMaxSum function is a recursive function that traverses the binary tree. It checks if the root node is null and if so, returns 0. It then recursively calls itself on the left and right child nodes of the root, taking the maximum of 0 and the returned value. The maxSum variable, initially set to negative infinity, is updated to be the maximum of its current value and the sum of the root node's value and the maximum sums of the left and right subtrees. The function then returns the maximum of the left and right sums plus the root node's value. The maxPathSum function resets maxSum to negative infinity, calls findMaxSum on the root node, and then returns maxSum. The code then creates a binary tree and logs the maximum path sum. This solution works by recursively exploring all paths in the tree, updating the maximum sum found so far, and always carrying forward the maximum sum that can be extended from a node.

---

# TypeScript Differences

The TypeScript version of the solution is more structured and object-oriented than the JavaScript version. It uses classes to define the structure of a Node and a BinaryTree, and encapsulates the logic for finding the maximum path sum within the BinaryTree class. This makes the code more modular and easier to understand and maintain.

In terms of language features, TypeScript introduces static types, which are not present in JavaScript. In the TypeScript version, the types of variables and function return values are explicitly declared. For example, the `Node` class has properties `left` and `right` which are either of type `Node` or `null`. The `maxPathSum` method is declared to return a `number`. These type annotations help to prevent bugs and improve the tooling support (e.g., autocompletion, refactoring support, etc.).

The TypeScript version also uses the `public` keyword in the `Node` constructor to automatically create and initialize a `value` property. This is a shorthand that is not available in JavaScript.

The logic of the two versions is essentially the same. Both versions use a recursive helper function to calculate the maximum path sum that can be obtained starting from each node. The maximum path sum is updated at each node and returned at the end. The main difference is that in the TypeScript version, this logic is encapsulated within the `BinaryTree` class.

---

# C++ Differences

The C++ version of the solution follows the same logic as the JavaScript version. Both versions use a helper function that recursively finds the maximum sum of the path that can be extended to the input binary tree's root node. The main function then uses this helper function to find the maximum path sum.

However, there are some differences due to the language features and methods used in each version:

1. Object Creation: In JavaScript, objects are created using the `new` keyword and a constructor function. In C++, objects are created using the `new` keyword and a function that returns a pointer to the object.

2. Null/None Values: In JavaScript, `null` is used to represent a non-existent object or null value. In C++, `NULL` is used.

3. Maximum Negative Number: JavaScript uses `Number.NEGATIVE_INFINITY` to represent the smallest possible number, while C++ uses `INT_MIN`.

4. Max Function: JavaScript uses `Math.max()` to find the maximum of two numbers, while C++ uses `max()` from the `<algorithm>` library.

5. Print Statement: JavaScript uses `console.log()` to print to the console, while C++ uses `cout`.

6. Main Function: In C++, the `main()` function is the entry point of the program. JavaScript doesn't have a `main()` function; instead, the script is executed from top to bottom.

7. Memory Management: In C++, the `new` keyword is used to allocate memory on the heap for new objects, and it's the programmer's responsibility to deallocate this memory using `delete` when it's no longer needed. In JavaScript, memory management is handled automatically by the garbage collector.

---
