import { maxSubAr } from "./maxSubArray.js";
/**
 * Maximum circular sub array sum
 * time: O(n), aux space: O(1)
 */

function maxCircularSubArr(arr) {
  const maxLinerSub = maxSubAr(arr);
  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
    arr[i] = -arr[i];
  }

  //minimum subarray sum using Kadane's algorithm
  const invertedSub = maxSubAr(arr);

  const maxCircularSub = totalSum + invertedSub; // since maxInvertedKadane is negative, we add it to totalSum

  if (maxCircularSub === 0) {
    return maxLinerSub;
  }

  return Math.max(maxLinerSub, maxCircularSub);
}

console.log("cicular: " + maxCircularSubArr([1, 2, -3, -2, 5]));
