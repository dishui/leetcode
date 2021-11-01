/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
 * Algorithm
 * 
 */
 const Heap = require('../collections/heap'); //http://www.collectionsjs.com

 var findMedianSortedArrays = function(nums1, nums2) {
     const minHeap = new Heap([], null, ((a, b) => b - a));
     const maxHeap = new Heap([], null, ((a, b) => a -b));
    
     nums1.forEach((num) => {
         insert_num(num, maxHeap, minHeap);
     });
     nums2.forEach((num) => {
         insert_num(num, maxHeap, minHeap);
     });
      balance_heaps(maxHeap, minHeap);
     return find_media(maxHeap, minHeap);
 };
 
 function insert_num(num, maxHeap, minHeap) {
     if (maxHeap.length === 0  || maxHeap.peek() >= num) {
         maxHeap.push(num);
     } else {
         minHeap.push(num);
     }
 }
 
 function balance_heaps(maxHeap, minHeap) {
     if (maxHeap.length > minHeap.length + 1) {
         minHeap.push(maxHeap.pop());
     } else if (maxHeap.length < minHeap.length) {
         maxHeap.push(minHeap.pop());
     }
 }
 
 function find_media(maxHeap, minHeap) {
     if (maxHeap.length === minHeap.length) {
         return maxHeap.peek() / 2.0 + minHeap.peek() / 2.0;
     }
     return maxHeap.peek();
 }

 console.log(findMedianSortedArrays([3, 1], [5, 4]));
 console.log(findMedianSortedArrays([2,4,6], [1, 5, 7]));