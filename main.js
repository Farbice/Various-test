
//CALLBACK FUNCTIONS
//Return a new tab containing modified values, in a constant variable
//Operations on the values are set when declaring the constant

const arrf = [1, 2, 3, 4];

function bingo(tab, callback){
    
    const newArrf = [];

    for(i = 0; i < tab.length; i++){
        newArrf.push(callback(tab[i]));
    }

    return newArrf;

}

const retour = bingo(arrf, value => value + 1);

console.log(retour);
console.log(arrf.map((value) => {return value * 53}));
console.log(arrf.map((value) => {return 1/value}));




//__________________________
//Return a new tab containing modified values, in a constant variable
//like before, operations on the values are set when declaring the constant

const moodindex = [1, 2, 3, 4];

function moodSelect(tab, callback){
    
    const moodResult = [];

    for(i = 0; i < tab.length; i++){
        moodResult.push(callback(tab[i]));
    }

    return moodResult;

}

const moodOutput = moodSelect(moodindex, value => value / (value + 0.85));

console.log(moodOutput);
console.log(arrf.map((value) => {return value / (value + 0.85)}));



//__________________________
//Return either a sum or a product of a number

function sum(a){
    return a + a;
}

function product(a){
    return a * a;
}

function operation(a,callback){
    return callback(a);
}

console.log(operation(5,sum));
console.log(operation(5,product));