import { email } from "./personal.js";

document.getElementById('form-contact').addEventListener('submit', event => sendEmail(event))

const sendEmail = (event) => {
    event.preventDefault();

    const subject = document.getElementById('form-subject').value;
    const body = document.getElementById('form-body').value;

    const link = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = link;
}
