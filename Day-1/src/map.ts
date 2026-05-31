const nums = [1, 2, 3, 4, 5];

// task -> double the value of every element of the array
// and return a new array

// map is available on the array
const updatedArr = nums.map((elem) => {
    return elem * 2;
});

console.log(updatedArr);
console.log("Original Arr: ", nums);

// task
const users = [
  {
      id: 1,
      firstName: "Emily",
      age: 29,
      gender: "female",
      email: "emily.johnson@x.dummyjson.com",
      phone: 819654313024
  },
    {
      id: 2,
      firstName: "John",
      age: 29,
      gender: "male",
      email: "emily.johnson@x.dummyjson.com",
      phone: 819654313024
  },
    {
      id: 3,
      firstName: "Carol",
      age: 29,
      gender: "male",
      email: "emily.johnson@x.dummyjson.com",
      phone: 819654313024
  }
]

const updatedUsers = users.map((user) => {
    return user.firstName;
})

const output2 = users.map((user) => {
    return {
        ...user,
        canVote: user.age >= 18
    }
})

console.log(output2);
// console.log("only name:", updatedUsers);

// next task
