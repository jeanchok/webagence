import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Meta from '../components/Meta'

const Contact = () => {
    const [message, setMessage] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [messageBody, setMessageBody] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9krjany', 'template_npw1bqt', form.current, 'Kk1GXDbI61romaMWa')
            .then((result) => {
                console.log(result.text);
                setMessage(true);
                setEmail('');
                setName('');
                setSubject('');
                setMessageBody('');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <Meta
                title={"Webzh Agence | Contactez-nous !"}
                description={"Envie de créer un site web ou une application web ? Vous êtes au bon endroit !"}
            />
            <div className="main">

                <Header />
                <section className='header_textContainer'>

                    <div className='header_textContainer--flex'>
                        <div>
                            <h1>
                                Contactez-nous
                            </h1>
                            <h1>
                                pour parler
                            </h1>
                            <h1>
                                de votre projet.
                            </h1>
                        </div>

                    </div>
                    <p className='contactP'>Nous sommes à votre disposition pour toutes Informations supplémentaires.</p>
                </section >
                <section className='contactFormContainer'>
                    <h2>Contactez-nous par mail, par le formulaire ou répondez directement au questionnaire si vous voulez un devis.</h2>
                </section >
                <section className='contactFormContainer'>

                    <form className='contactForm' id='contact-form' ref={form} onSubmit={sendEmail} noValidate>
                        {/* Row 1 of form */}

                        <h3>Formulaire de contact.</h3>

                        <div className='formRow'>
                            <div className='col-6'>
                                <input
                                    type='text'
                                    name='name'
                                    className='form-control formInput'
                                    placeholder='Nom'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                ></input>

                            </div>
                            <div className='col-6'>
                                <input
                                    type='email'
                                    name='email'
                                    className='form-control formInput'
                                    placeholder='Addresse email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    required
                                ></input>

                            </div>
                        </div>
                        {/* Row 2 of form */}
                        <div className='row formRow'>
                            <div className='col'>
                                <input
                                    type='text'
                                    name='subject'
                                    className='form-control formInput'
                                    placeholder='Objet'
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                    minLength={3}
                                ></input>

                            </div>
                        </div>
                        {/* Row 3 of form */}
                        <div className='row formRow'>
                            <div className='col'>
                                <textarea
                                    rows={3}
                                    name='message'
                                    className='form-control formInput'
                                    placeholder='Message'
                                    value={messageBody}
                                    onChange={(e) => setMessageBody(e.target.value)}
                                    required                                ></textarea>

                            </div>
                        </div>
                        <button className='buttonFront buttonContact' type='submit'>
                            Envoyer
                        </button>
                        {message ? <p className='successMessage'>Votre message a bien été envoyé</p> : null}
                    </form>
                    <div className='contactInfo'>
                        <h3>Informations</h3>
                        <p>
                            <span>
                                <i className='fas fa-map-marker-alt'></i>
                            </span>
                            <span>
                                Lieu dit les Placis, 35230 Bourgbarré
                            </span>
                        </p>
                        <p>
                            <span>
                                <i className='fas fa-phone'></i>
                            </span>
                            <span>
                                <a href='tel:+33624777746'>
                                    +33 6 24 77 77 46
                                </a>
                            </span>
                        </p>
                        <p>
                            <span>
                                <i className='fas fa-envelope'></i>
                            </span>
                            <span>
                                <a href='mailto:contact@jeanchoquet.fr'>
                                    contact@jeanchoquet.fr
                                </a>
                            </span>
                        </p>
                    </div>
                </section>

                <section className='contactFormContainer__question'>
                    <h2>Demandez un devis en remplissant ce questionnaire.</h2>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScIIkBCOm3w7lErYUNY7itj1hxCPJm6_JkAfutVjhX3_6b2mw/viewform?embedded=true" width="640" height="4650" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
                </section >
            </div>



        </>
    );
};

export default Contact;