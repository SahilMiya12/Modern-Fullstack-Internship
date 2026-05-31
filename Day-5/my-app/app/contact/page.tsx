"use client"
import submitContactForm from "../actions/submitContactForm";

function ContactForm() {
    return (
        <form action={submitContactForm}>
            
            {/* NAME */}
            <label htmlFor="fullName">Full Name</label>
            <br />
            <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Enter your name"
                required
            />

            <br /><br />

            {/* EMAIL */}
            <label htmlFor="email">Email</label>
            <br />
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
            />

            <br /><br />

            {/* MESSAGE */}
            <label htmlFor="message">Message</label>
            <br />
            <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                required
            />

            <br /><br />

            {/* SUBMIT */}
            <button type="submit">
                Submit
            </button>

        </form>
    );
}

export default ContactForm;

