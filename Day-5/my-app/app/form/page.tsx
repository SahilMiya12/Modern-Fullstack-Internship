'use client';

import { useFormStatus } from "react-dom";

function Button() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
        >
            {pending ? "Submitting..." : "Submit"}
        </button>
    );
}

export default function Form() {

    async function action() {
        await new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });

        console.log("Form Submitted");
    }

    return (
        <>
            <form action={action}>
                Username:
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter username"
                />

                <br /><br />

                Password:
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                />

                <br /><br />

                <Button />
            </form>
        </>
    );
}