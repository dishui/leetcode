/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(numbers, target) {
    let result = [];
    let start = 0, end = numbers.length - 1;
    while (start < end ) {
        if ( numbers[start]  > target - numbers[end]) {
            end -= 1;
        } else if (numbers[start] < target - numbers[end]) {
            start += 1;
        } else {
            result.push(start + 1);
            result.push(end + 1);
            break;
        }
        
    }
    return result
    
};