/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(array) {
    let currentSum = array[0];

    for (let i = 1; i < array.length; i += 1) {
        currentSum += array[i];

        if (array[i] < currentSum) array[i] = currentSum;
        if (array[i] > currentSum) currentSum = array[i];
    }

    return Math.max(...array);
};