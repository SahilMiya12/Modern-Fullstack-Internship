'use server'
import {prisma} from '@/lib/prisma';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

async function signup(formdata:FormData){
   const username = String(formdata.get("username"));
   const email = String(formdata.get("email"));
   const password = String(formdata.get("password"));

   const hashedPassword = await bcrypt.hash(password, 10);
   console.log("hashPassword", hashedPassword);

   // store this data in db 
   await prisma.users.create({
    data:{
        name: username,
        email,
        password:hashedPassword
    }
   });

   // bcrypt
   redirect('/login');

//    const output = await prisma.users.findMany();
//    console.log("output:", output);
}

export default signup;