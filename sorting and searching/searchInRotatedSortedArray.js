/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const find_pivot = function(nums) {
    if (nums === null || nums.length === 0) {
        return -1;
    }
    if (nums.length === 1 || nums[0] <= nums[nums.length - 1]){
        return 0;
    }
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start)/2);
        if (mid < nums.length - 1 && nums[mid+1] < nums[mid]) {
            return mid + 1;
        }
        else if (nums[start] <= nums[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}
 const search = function(nums, target) {
    
    if (nums === null || nums.length === 0) {
        return -1;
    }
    
    let start = 0, end = nums.length - 1;
    
    const pivot = find_pivot(nums);
   
    if (target === nums[pivot]) {
        return pivot;
    } else if (target > nums[pivot] && nums[end] < target) {
       return binary_search(nums, target, start, pivot-1);
    } else {
       return binary_search(nums, target, pivot, end);
    }
}
 
const binary_search = function(nums, target, start, end) {
    if (nums === null || nums.length === 0){
        return -1;
    }
    while (start <= end) {
        let mid = Math.floor((start + (end - start)/2));
        if (target === nums[mid]) {
            return mid;
        }
        if (target <= nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}
