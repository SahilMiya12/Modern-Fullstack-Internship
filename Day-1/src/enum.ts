// enum Priority{
//     Low = "low",
//     Medium = "medium",
//     High = "high"
// }

// console.log(Priority);
// console.log(Priority.Low);

// create a login function (user) and based on the userRole it will grant the access

enum Roles{
    Admin = "ADMIN",
    User = "USER"
}

// user interface 
// user - id, name, role, email, isValid
// isValid - user should exist in the database

interface User{
    id: number,
    name: string,
    role: string,
    email: string,
    isValid: boolean
}

// create two users
const user1 : User = {
    id: 1,
    name: "Rohan",
    role: Roles.User,
    email: "rohan@gmail.com",
    isValid: true
}

// create the second user
const user2 : User = {
    id: 2,
    name: "Vijay",
    role: Roles.Admin,
    email: "vijay@gmail.com",
    isValid: true
}

// create the login function

function login(user: User): void{
    // we should login to the user to the website
    console.log(`${user.name} has logged in successfully!`);

    // check the user role
    if(user.role === "ADMIN"){
        console.log(`${user.name} has granted ${user.role} rights`);
        console.log(`${user.name} can manage user permissions and other settings`);
        return;
    }else{
        console.log(`${user.name} has ${user.role} rights only`);
    }
}

// login(user1);
login(user2);