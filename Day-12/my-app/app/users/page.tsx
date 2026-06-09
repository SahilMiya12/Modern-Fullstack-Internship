import Link from "next/link";
export default async function Users(){

    return (
        <>
        <h1>Users are: </h1>
        <nav>
            <ul>
                 <li>
                    <Link href={`/users/Sahil`}>Sahil</Link>
                </li>

                <li>
                    <Link href={`/users/Sam`}>Sam</Link>      
                </li>

                <li>
                    <Link href={`/users/John`}>John</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}