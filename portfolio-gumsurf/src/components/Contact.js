import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
        };

        emailjs.send('service_4stcns8', 'template_nev0679', templateParams, 'sqKMJg9tpN0LBAKLD')
            .then(() => {
                console.log('Email sent successfully!');
                templateParams.reset();
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
            });
    };


    return (
        <div className='contact'>
            <div className='background-color'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='div-color'>
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" {...register('name', { required: true })} />
                        {errors.name && <span>Ce champ est requis</span>}
                    </div>
                    <div className='div-color'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" {...register('email', { required: true })} />
                        {errors.email && <span>Ce champ est requis</span>}
                    </div>
                    <div className='div-color'>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" {...register('message', { required: true })} />
                        {errors.message && <span>Ce champ est requis</span>}
                    </div>
                    <div className='div-color'>
                        <button className='button-submit' type="submit">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact