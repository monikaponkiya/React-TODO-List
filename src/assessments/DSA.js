// DSA Given an array of integers nums and an integer target, return the indices of the two
// numbers such that they add up to target. You may assume that each input would have exactly one
// solution, and you may not use the same element twice. You can return the answer in any order.

function twoNumberSum(nums, target) {
	// Check possible error 
  if (!Array.isArray(nums)) {
    throw new Error("Input must be an array of numbers.");
  }
  if (typeof target !== 'number') {
    throw new Error("Target must be a number.");
  }
  if (!nums.every(num => typeof num === 'number')) {
    throw new Error("All elements in the array must be numbers.");
  }

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;

    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(current, i);
  }
  throw new Error("No two numbers add up to the target.");
}

try {
  console.log("Two Number Sum:", twoNumberSum([2, 7, 11, 15], 9));
} catch (err) {
  console.error(err.message);
}