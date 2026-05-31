const nums : number[] = [1, 2, 3, 4, 5];

const first = nums[0];
const second = nums[1];
const third = nums[2];

console.log("First 3 elems are: ");
// console.log(first, second, third);

// There exists a shortcut to do the same thing
// Array destructuring 
const [first_num, sec_num, third_num] = nums;
console.log(first_num, sec_num, third_num);

const [firstElem, , , , lastElem] = nums;
console.log("first & third elem: ", firstElem, lastElem);

// Object destructuring
enum VoteStatus{
    canVote = "VOTE",
    notEligible = "NOT ELIGIBLE"
}

const user = {
    name: "Ajay",
    age: 30,
    isEligibleToVote: VoteStatus.canVote
}

// get the props -- name and isEligibleToVote
const userName = user.name;
const voteStatus = user.isEligibleToVote;

// console.log(`${userName} can ${voteStatus}`);

// destructure these values
const {name, isEligibleToVote} = user;
console.log(`User name is ${name} and vote status is: ${isEligibleToVote}`);




