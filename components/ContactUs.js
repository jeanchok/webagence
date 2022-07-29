import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

const ContactUs = () => {
    return (
        <div className='ContactUs__Container'>
            <div className='ContactUs__Container--text'>
                {/* <i class="fa fa-comments-o" aria-hidden="true"></i> */}

                <h3 className='ContactUs__Container--text-title'> <FontAwesomeIcon icon={faComment} />  Besoin d'informations supplémentaires ?</h3>
                <h3 className='ContactUs__Container--text-title'>Contactez-nous !</h3>
                <a className='ContactUs__Container--text-link buttonFront' href='/contact'>Contact</a>
            </div>

        </div>
    );
};

export default ContactUs;