// Code your solutions in this file
function writeCards(array, event) {
    let thankyou = []
    for (let i = 0; i < array.length; i ++){
        thankyou.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return thankyou 
}

function countDown(integer) {
    while (integer > 0) {
        console.log (integer);
        integer -= 1;
    }
    console.log(integer)
}