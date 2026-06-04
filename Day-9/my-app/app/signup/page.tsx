import signup from "../actions/signup"
export default async function Signup(){
    return (
        <>
        <h1>Register here: </h1>
        <form action={signup}>
            Username:
            <input type="text" name="username" id="username" /><br /><br />
            Email:
            <input type="email" name="email" id="email" /> <br /><br />
            Password:
            <input type="password" name="password" id="password" /> <br /><br />
            <button type="submit">Signup</button>
        </form>
        </>
    )
}