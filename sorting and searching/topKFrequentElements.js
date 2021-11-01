//https://leetcode.com/explore/interview/card/amazon/79/sorting-and-searching/2995/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 const Heap = require('./collections/heap');

 const topKFrequent = function(nums, k) {
   let numbersFreq = {};
   for (let i = 0; i < nums.length; i++) {
     if (!numbersFreq[nums[i]]) {
       numbersFreq[nums[i]] = 1;
     } else {
       numbersFreq[nums[i]] += 1;
     }
   }
 
   let minHeap = new Heap([], null, (a, b) => b - a);
   for (let i = 0; i < k; i++) {
     minHeap.push(nums[i]);
   }
 
   for (let i = k; i < nums.length; i++) {
     let temp = numbersFreq[minHeap.peek()];
     let current = numbersFreq[nums[i]];
     if (current > temp) {
       minHeap.pop();
       minHeap.push(nums[i]);
     } else {
       continue;
     }
   }
 
   return minHeap.toArray();
 };
 