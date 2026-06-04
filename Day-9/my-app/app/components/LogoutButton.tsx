import logout from '../actions/logout';
export default function LogoutButton(){
    return (
        <div>
            <form action={logout}>
                <button>Logout</button>
            </form>
        </div>
    )
}