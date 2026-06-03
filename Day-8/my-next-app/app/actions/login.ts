"use server";

import { pool } from "../lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formdata: FormData) {
    const email = formdata.get("email");

    if (!email) return;

    const user = await pool.query(
        `SELECT * FROM "user"
         WHERE email = $1`,
        [email]
    );

    if (user.rows.length === 0) {
        console.log("User not found");
        return;
    }

    const cookieStore = await cookies();
    cookieStore.set("user", user.rows[0].id.toString());

    redirect("/home");
}