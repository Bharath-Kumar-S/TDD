// Input Array: [2, 7, 11, 15]
// Input Target: 9Output: [0, 1]
// Explanation: Because nums[0] + nums[1] equals 2 + 7 = 9

export const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    const complementIndex = map.get(complement);
    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }
    map.set(num, i);
  }

  return [-1, -1];
};
