// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].


function merge(left, right) {
    let leftIndex = 0
    let rightIndex = 0
    let sortedArr = []

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArr.push(left[leftIndex])
            leftIndex++
        } else {
            sortedArr.push(right[rightIndex])
            rightIndex++

        }
    }

    return sortedArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }

    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}


console.log(mergeSort([105, 79, 100, 110]))