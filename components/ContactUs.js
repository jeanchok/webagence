import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

const ContactUs = () => {
    return (
        <div className='ContactUs__Container'>
            <div className='ContactUs__Container--text'>
                {/* <i className="fa fa-comments-o" aria-hidden="true"></i> */}

                <h3 className='ContactUs__Container--text-title'> <FontAwesomeIcon icon={faComment} />  Besoin d&apos;informations supplémentaires ?</h3>
                <h3 className='ContactUs__Container--text-title'>Contactez-nous !</h3>
                <Link href="/contact" className='ContactUs__Container--text-link buttonFront'>Contact</Link>
            </div>

        </div>
    );
};

export default ContactUs;