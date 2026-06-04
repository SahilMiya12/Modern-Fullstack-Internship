'use server'

import { createToken } from "@/lib/jwt";
import {prisma} from '@/lib/prisma'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt';

export default async function login(formdata:FormData){
    // console.log(formdata);
    // const name = String(formdata.get("username"));
    const email = String(formdata.get("email"));
    const password = String(formdata.get("password"));

    // verify the user password
    // if password fails in verification, throw some error
    // generate a token
    // store the token in cookie
    // redirect the user to the products page 
  

    // now fetch the user details 
    const user = await prisma.users.findUnique({
        where: {email}
    });
    console.log("loggedInUser: ", user);
    if(!user){
        throw new Error("User does not exit");
    }

    const validUser = await bcrypt.compare(password, user.password!);

    // create token
    if(!validUser){
        throw new Error("Password does not match!");
    }
    const token = createToken(user.id, user.name!, user.email);


    // store this token in cookie
    const cookieStore = await cookies();
    cookieStore.set("token", token);

    console.log("token is: ", cookieStore.get("token"));

    // redirect user to products route
    redirect('/products');
}