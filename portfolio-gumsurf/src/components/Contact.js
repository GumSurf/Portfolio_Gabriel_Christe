import Email from '../assets/email.png';
import Telephone from '../assets/telephone.png';
import Linkedin from '../assets/linkedin.png';

function Contact() {

    return (
        <div id='Contact' className='contact'>
            <div>
                <div className='background_contact'>
                    <h2 className='second_title_contact'>Moyen de me contactez</h2>
                    <div className='div_text_contact'>
                        <p className='text_contact'>Je suis toujours à la recherche de nouvelles opportunités et collaborations intéressantes.
                            N'hésitez pas à me contacter via les moyens suivants :</p>
                    </div>
                </div>
                <div className='list_contact'>
                    <div className='div_email'>
                        <img src={Email} alt='Email Icon' />
                        <a href='mailto:gabriel.christe@gmail.com'>gabriel.christe@gmail.com</a>
                    </div>
                    <div className='div_telephone'>
                        <img src={Telephone} alt='Telephone Icon' />
                        <a href='tel:+33638870562'>+33638870562</a>
                    </div>
                    <div className='div_linkedin'>
                        <img src={Linkedin} alt='Linkedin Icon' />
                        <a href='https://www.linkedin.com/in/gabriel-christe-000/'>Gabriel Christe</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;