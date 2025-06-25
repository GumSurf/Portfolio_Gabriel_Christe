import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        console.log("Données du formulaire :", Object.fromEntries(formData));

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log("Email envoyé :", result.text);
                    setStateMessage('Message sent!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // hide message after 5 seconds
                },
                (error) => {
                    setStateMessage('Something went wrong, please try again later');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // hide message after 5 seconds
                }
            );

        // Clears the form after sending the email
        e.target.reset();
    };
    return (
        <div className='contact_form'>
            <form onSubmit={sendEmail}>
                <label>Name</label>
                <input placeholder="Taper Votre Nom" type="text" name="user_name" required />
                <label>Email</label>
                <input placeholder="Taper Votre Email" type="email" name="user_email" required />
                <label class="" for="message">Message</label>
                <textarea placeholder="Taper Votre Message" cols="30" rows="10" class="" name="message" id="message" required></textarea>
                {stateMessage && <p>{stateMessage}</p>}
                <button type="submit" class="button button--stroke button-contact" data-block="button">
                    <span class="button__flair"></span>
                    <span class="button__label link">Envoyer</span>
                </button>
            </form>
        </div>
    );
};
export default ContactForm;