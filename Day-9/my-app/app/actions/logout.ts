'use server'
import { cookies } from "next/headers"
import {redirect} from 'next/navigation'

export default async function logout(){
    // delete the token from the cookie
    // redirect to the login page
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    // console.log("token: ", token);
    cookieStore.delete(token!.value);
    redirect('/login');
}