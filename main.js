const arrf = [1, 2, 3, 4];

function bingo(tab, callback){
    
    const newArrf = [];

    for(i = 0; i < tab.length; i++){
        newArrf.push(callback(tab[i]));
    }

    return newArrf;

}

const retour = bingo(arrf, value => value * 52);

console.log(retour);
console.log(arrf.map((value) => {return value * 53}));