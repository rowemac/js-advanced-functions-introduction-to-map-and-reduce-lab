// Your code here
function mapToNegativize(array) {
    return array.map(x => x * -1)
}

function mapToNoChange(array) {
    return array.map(x => x)
}

function mapToDouble(array) {
    return array.map(x => x * 2)
}

function mapToSquare(array) {
    return array.map(x => x ** 2)
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint
    for(let num of sourceArray){
        total = total + num 
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    let value = true
    for(let element of sourceArray){
        if(element === false) {
            value = false
        }
    }
    return value 
}

function reduceToAnyTrue(sourceArray) {
    let value = false
    for(let element of sourceArray) {
        if(element === true) {
            value = true
        }
    }
    return value
}