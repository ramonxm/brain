function singleNumber(nums: number[]): number {
  if (nums.length === 1) {
    return Number(nums);
  }

  let num = 0;

  for (let i = 0; nums.length > i; i++) {
    num = num ^ nums[i];
  }

  return num;
}
