var billionaires = require('./billionaires.json');
 
/*
    Get the names of the billionaires that are in their 20s
*/

let twentyYearOldBillionaires = billionaires.filter((x)=>x.demographics.age >= 20 && x.demographics.age < 30);

/*
    create a new object with the billionairse year, name and worth rounded to the newarest integer
    {
        year: 1996,
        name: Bernardo Garza Sada,
        worth: 2
    }
*/

let roundedWorth = billionaires.map((x)=>{
    return {
            year: x.year,
            name: x.name,
            worth: Math.round(x["wealth"]["worth in billions"])
            }
});
/*
    sum the rounded worth of all the billionaires
*/

let aggregatedWorth = roundedWorth.reduce((x, y)=> { return x + y.worth },0);
// console.log(aggregatedWorth)

/*
    find the the richest billionaire, make sure the result is in an array
*/

let richest = billionaires.reduce((prev, current) => {
    if(Object.keys(prev).length === 0){
     return current;
    }else if(current.rank < prev.rank){
        prev = current;
    }
    return prev;
},{})
richest=[richest];
/*
    find the poorest billioanire, make sure the result is in an array
*/

let poorest = billionaires.reduce((prev, current) => {
    if(Object.keys(prev).length === 0){
     return current;
    }else if(current.rank >= prev.rank){
        prev = current;
    }
    return prev;
},{})
poorest=[poorest];;

/*
    make a new array containing the richest and the poorest billionaire
*/

let richAndPoor = [].concat(richest, poorest);

module.exports = {
    twentyYearOldBillionaires,
    roundedWorth,
    aggregatedWorth,
    richest,
    poorest,
    richAndPoor
}