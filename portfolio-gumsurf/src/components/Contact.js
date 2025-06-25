import Email from '../assets/email.png';
import Telephone from '../assets/telephone.png';
import Linkedin from '../assets/linkedin.png';
import ContactForm from './ContactForm';

function Contact() {

    return (
        <div id='Contact' className='contact'>
            <div className='cover'>
                <div className='background_contact'>
                    <h2 className='second_title_contact'>Moyen de me contactez</h2>
                    <div className='div_text_contact'>
                        <p className='text_contact'>Je suis toujours à la recherche de nouvelles opportunités et collaborations intéressantes.
                            N'hésitez pas à me contacter via les moyens suivants :</p>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;