// 1 ***********************

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Create an empty object to store the mappings of numbers to their indices
    const hashMap = {};

    // Loop through the array of numbers
    for (let i = 0; i < nums.length; i++) {
        // Calculate the value that would make the current number add up to the target
        const complement = target - nums[i];

        // Check if the complement exists in the hash table
        // If it does, we've found our two numbers
        if (hashMap.hasOwnProperty(complement)) {
            return [hashMap[complement], i];
        }

        // Otherwise, add the current number and its index to the hash table
        hashMap[nums[i]] = i;
    }

    // If the function hasn't returned by now, then there's no solution
    // However, the problem statement assures us that one solution exists, so this should never happen.
    return null;
}

// Test the function
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output should be [0, 1]
const nums2 = [5, 13, 4, 2, 7, 12, 13, 20, 5, 14, 6];
const target2 = 26;
console.log(twoSum(nums2, target2)); // Output should be [1, 6]



// 2 *********************


// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // Declare an empty array to use as a stack
    let stack = [];

    // Loop through each character in the input string
    for (let i = 0; i < s.length; i++) {
        // Get the current character
        let currentChar = s[i];

        // If the current character is an opening bracket, push it onto the stack
        if (currentChar === '(' || currentChar === '{' || currentChar === '[') {
            stack.push(currentChar);
        }
        // If the current character is a closing bracket
        else {
            // Pop the last element from the stack (this should be the matching opening bracket)
            let lastElementInStack = stack.pop();

            // Check if the popped element actually matches with the current closing bracket
            if (currentChar === ')' && lastElementInStack !== '(') {
                return false;
            }

            if (currentChar === '}' && lastElementInStack !== '{') {
                return false;
            }

            if (currentChar === ']' && lastElementInStack !== '[') {
                return false;
            }
        }
    }

    // If the stack is empty at this point, the brackets are balanced
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}

// Test the function
console.log(isValid("()"));    // Should print true
console.log(isValid("()[]{}"));// Should print



// 3 **********************

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let minPrice = Number.POSITIVE_INFINITY;
    let maxProfit = 0;

    for (let price of prices) {
        // Update minPrice if a new minimum price is found
        minPrice = Math.min(minPrice, price);

        // Update maxProfit if a new maximum profit is found
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
}

// Test the function
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1));  // Output should be 5 (buy at 1 and sell at 6)

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2));  // Output should be 0 (no profitable transaction possible)




// 4 ***********************

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.


function hasCycle(head) {
    // Initialize two pointers, slow and fast, both at the head of the linked list
    let slow = head;
    let fast = head;

    // Traverse the linked list using a loop
    while (fast !== null && fast.next !== null) {
        // Move the slow pointer one step
        slow = slow.next;
        // Move the fast pointer two steps
        fast = fast.next.next;

        // Check if the fast and slow pointers have met
        if (fast === slow) {
            return true; // There is a cycle
        }
    }

    // If the loop terminated, there is no cycle
    return false;
}
