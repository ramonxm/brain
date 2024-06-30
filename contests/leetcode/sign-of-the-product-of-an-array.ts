function arraySign(nums: number[]): number {
  let isNegativeProduct = false;

  for (let num of nums) {
    if (num === 0) {
      return 0;
    }
    if (num < 0) {
      isNegativeProduct = !isNegativeProduct;
    }
  }

  return isNegativeProduct ? -1 : 1;
}
