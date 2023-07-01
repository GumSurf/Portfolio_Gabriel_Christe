import LOGO from '../assets/LOGO.png'

function Footer() {
    return (
        <div className='portfolio-footer'>
            <img src={LOGO} alt="Logo page web" />
            <h2 className='kasa-copyright'>© 2023 Gabriel CHRISTE. All rights reserved</h2>
            <a href='#'>GitHub</a>
            <a href='#'>Linkedin</a>
        </div>
    )
}

export default Footer