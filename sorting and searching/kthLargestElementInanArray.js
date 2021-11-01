/**
 * https://leetcode.com/explore/interview/card/amazon/79/sorting-and-searching/482/
 */
// use a k size minHeap for kth largest number
const Heap = require('../collectioins/heap');

const findKthlargest = function(nums, k) {
    const minHeap = new Heap([], null, ((a, b) => b - a));
    
    for (let i = 0; i < k; i++) {
        minHeap.push(nums[i]);
    }

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > minHeap.peek()) {
            minHeap.pop();
            minHeap.push(nums[i]);
        }
    }
    return minHeap.peek();
};