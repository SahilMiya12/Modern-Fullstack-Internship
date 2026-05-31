// call dummyjson api using fetch
// store the api data in state variable using useState
// loading, setLoading -> to display the message loading
// error, SetError - if any error occurs, this error will handle it
// display alll the users

//useEffect -- updation stage

import { useState, useEffect } from "react";

type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
};

function Users() {

    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    function getUsersData() {

        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.users);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }


    useEffect(() => {
        getUsersData();
    }, []);


    if (isLoading) {
        return <h1>Users Data Loading...</h1>;
    }
    if (error) {
        return <h1>Error: {error}</h1>;
    }
    return (
        <div>
            <h1>Users Data</h1>
            {
                users.map((user) => (
                    <div key={user.id}>
                        <h2>{user.firstName} {user.lastName}</h2>
                        <p>{user.email}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    );
}

export default Users;