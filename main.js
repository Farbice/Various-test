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

