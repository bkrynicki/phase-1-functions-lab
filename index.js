// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42){
        return someValue - 42;
    } else if (someValue < 42){
        return 42 - someValue;
    }
}
function distanceFromHqInFeet(someValue) {
    if (someValue > 42){
        return (someValue - 42)* 264
    } else if (someValue < 42){
        return (42 - someValue)* 264
    }
}
function distanceTravelledInFeet(start, finish){
    if (start > finish){
        return (start - finish)* 264
    } else if (start < finish){
        return (finish - start)* 264
    }
}
function calculatesFarePrice(start, destination){
    let distanceTravelled;
    if (start > destination){
        distanceTravelled = (start - destination)* 264
    } else if (destination > start){
        distanceTravelled = (destination - start)* 264
    }
    let farePrice;
    if (distanceTravelled < 400){
        return 0
    } if (distanceTravelled > 2500){
        return "cannot travel that far"
    } if (distanceTravelled > 2000){
        return farePrice = 25;
    }else {
        return farePrice = (distanceTravelled - 400)* 0.02
    }
}