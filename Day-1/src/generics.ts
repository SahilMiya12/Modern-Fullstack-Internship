function generic<T>(value: T){
    // passes the string 
    console.log(value);
    return value;
}

// const output = generic<string>("Hello World");
const num = generic<number>(10);
console.log("Num is: ", num);

// return some value

// try to create a function(arr)
function getArrElem<T>(arr:T[]): T[] | undefined{
    return arr;
}

const arr:number[] = [1, 2, 3, 4, 5];
const output = getArrElem<number>(arr);
// string type
const colors:string[] = ["Black", "Blue", "Green", "Red"];
const result = getArrElem<string>(colors);
console.log("colors arr: ", colors);
