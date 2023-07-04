import React from 'react';

function Contact() {
    return (
        <div className='contact'>
            <div className='background-color'>
                <h1 className='contact-me '>CONTACTEZ-MOI</h1>
                <div className='div-color'>
                    <h2 className='title-adresse, info-contact'>ADRESSE</h2>
                    <p className='adresse, info-contact'>10, avenue de la libération 56700 Hennebont</p>
                </div>
                <div className='div-color'>
                    <h2 className='title-telephone, info-contact'>TÉLÉPHONE</h2>
                    <p className='telephone, info-contact'>(+33)6 38 87 05 62</p>
                </div>
                <div className='div-color'>
                    <h2 className='title-email, info-contact'>E-MAIL</h2>
                    <p className='email, info-contact'>gabriel.christe@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact