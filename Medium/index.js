// 1********************

// Given a string s, find the length of the longest
// substring
//  without repeating characters.


/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let maxLength = 0; // To keep track of the maximum length found
    let start = 0; // To keep track of the start of the current substring
    let charMap = {}; // To keep track of the characters we have seen and their last index

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        // If the character is already in our substring, we update our start position.
        // This is to ensure that we always have unique characters in our substring.
        if (charMap.hasOwnProperty(currentChar) && charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        }

        // Update the latest index of the character
        charMap[currentChar] = i;

        // Calculate the length of the current substring and update maxLength accordingly
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

// Test the function
const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // Output should be 3 ("abc")