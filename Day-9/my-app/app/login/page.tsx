import login from "../actions/login"
export default function Login(){
    return (
        <div>
            <h1>Login: </h1>
            <form action={login}>
                Email:
                <input type="email" name="email" id="email" /><br /><br />
                Password:
                <input type="password" name="password" id="password" /><br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}