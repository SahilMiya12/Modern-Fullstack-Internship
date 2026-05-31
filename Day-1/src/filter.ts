const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// task -> filter out all even numbers

const evenNums = nums.filter((elem) => {
    return elem % 2 === 0;
})

console.log("Even nums: ", evenNums);

const arr = [
    {
        name: "Hanuman",
        age: 17
    },
    {
        name: "Krishna",
        age: 18
    },
    {
        name: "Sita",
        age: 30
    },
    {
        name: "Ram",
        age: 15
    }
]

// return an array where age >= 18
const output = arr.filter((obj) => {
    return obj.age >= 18;
})

console.log("output: ", output);
