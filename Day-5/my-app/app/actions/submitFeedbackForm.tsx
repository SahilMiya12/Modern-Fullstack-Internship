'use server';

import path from "path";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";

async function submitFeedbackForm(formData: FormData) {

    const username = formData.get("username");
    const email = formData.get("email");
    const feedback = formData.get("feedback");

    const newFeedback = {username, email, feedback};
    const filePath = path.join(process.cwd(), "app",  "data", "feedback.json" );
    const fileData = await fs.readFile(filePath,"utf-8");
    const jsData = fileData ? JSON.parse(fileData) : [];

     jsData.push(newFeedback);

    await fs.writeFile( filePath, JSON.stringify(jsData, null, 2));
    revalidatePath("/feedback");
    console.log("Feedback saved");
} 

export async function getAllFeedbacks() {
    const filePath = path.join( process.cwd(),"app", "data","feedback.json" );
    const rawData = await fs.readFile( filePath, "utf-8" );
    const fileData = rawData  ? JSON.parse(rawData) : [];
    return fileData;
}

export default submitFeedbackForm;