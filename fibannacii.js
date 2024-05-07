// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence

function iterFib(num) {
    if (num === 0) {
        return [0];
    }
    if (num === 1) {
        return [0, 1];
    }

    let arr = [0, 1]

    for (let i = 2; i < num; i++) {
        let nextNum = arr[i - 1] + arr[i - 2]
        console.log(nextNum)
        arr.push(nextNum)

    }
    return arr
}


const answer = iterFib(5)
console.log(ans)


// handling the same question recursively
function recursiveFib(num) {
    if (num === 0) {
        return [0];
    }
    if (num === 1) {
        return [0, 1];
    }

    let arr = recursiveFib(num - 1)
    let nextnum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(nextnum)

    return arr

}

const ans = recursiveFib(8)
console.log(ans)