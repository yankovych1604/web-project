'use strict';

//1
function stringToArray(string){
    return string.split(" ");
}
stringToArray("Robin Singh");
stringToArray("I love arrays they are my favorite");


//2
function DNAtoRNA(dna) {
    let rna = dna.split("").map((item) => {
        if(item.valueOf() === "t") {
            item = "u";

            return item;
        } else if (item.valueOf() === "T") {
            item = "U";

            return item;
        } else {
            return item;
        }
    }).join("");

    return rna;
}
DNAtoRNA("GCAT");


// 3
var min = function(list){
    return list.sort((a, b) => a - b)[0];
}
min([4,6,2,1,9,63,-134,566]);

var max = function(list){
    return list.sort((a, b) => b - a)[0]
}
max([4,6,2,1,9,63,-134,566]);


//4
function min(arr, toReturn) { 
    let minNumber = Math.min(...arr);

    if(toReturn === "value") {
        return minNumber;
    } else if (toReturn === "index") {
        return arr.indexOf(minNumber);
    }
}
min([500,250,750,5000,1000,230], 'value');


// 5
function doubleInteger(i) {
    return i * 2;
}
doubleInteger(2);


// 6
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
twiceAsOld(36,7);

// 7
function nthEven(n){
    let even = 0;

    for(let i = 1; i < n; i++) {
        even +=2;
    }

    return even;
}
nthEven(100);


// 8
function getRealFloor(n) {
    if (n < 0) {
        return n;
    } else if (n === 15) {
        return 13;
    } else {
        return n - 1;
    }
}
getRealFloor(5);


// 9
function past(h, m, s){
    return (h * 3600 + m * 60 + s) * 1000;
}
past(1,1,1);


// 10
function isDivisible(n, x, y) {
    return Number.isInteger(n / x) && Number.isInteger(n / y)
}
isDivisible(12,3,4);