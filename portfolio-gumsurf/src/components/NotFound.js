import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='kasa-not-found'>
            <h1 className='title-404'>404</h1>
            <h2 className='text-not-found'>Oups! La page que <span className='break-word'>vous demandez n'existe pas.</span></h2>
            <Link className='link-not-found' to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default NotFound;