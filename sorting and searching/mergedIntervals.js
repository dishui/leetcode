/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const merge = function(intervals) {
    if (intervals.length <2) {
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals = [];
    
    let start = intervals[0][0];
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
         let interval = intervals[i];
        if (interval[0] <= end) {
            end = Math.max(end, interval[1]);
        } else {
            mergedIntervals.push([start, end]);
            start = interval[0];
            end = interval[1];
        }
        
    }
    mergedIntervals.push([start, end]);
    return mergedIntervals
};