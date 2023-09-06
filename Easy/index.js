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
