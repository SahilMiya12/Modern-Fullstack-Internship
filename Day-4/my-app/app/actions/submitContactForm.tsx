'use server';

import path from "path";
import fs from "fs/promises";

type User = {
    fullName: string;
    email: string;
    message: string;
};

export async function submitContactForm(formData: FormData) {

    const name = formData.get("fullName");
    const userEmail = formData.get("email");
    const userMessage = formData.get("message");

    const obj: User = {
        fullName: String(name),
        email: String(userEmail),
        message: String(userMessage)
    };

    console.log("obj:", obj);

    const filePath = path.join(process.cwd(), "app", "data", "users.json");

    let fileData: User[] = [];

    try {
        const data = await fs.readFile(filePath, "utf-8");
        fileData = JSON.parse(data);
    } catch (err) {
        fileData = [];
    }

    fileData.push(obj);

    console.log("Parsed data:", fileData);

    await fs.writeFile(filePath, JSON.stringify(fileData, null, 2));
}

export default submitContactForm;