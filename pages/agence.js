import React from 'react';
import ContactUs from "../components/ContactUs";
import Header from '../components/Header';
import Image from 'next/image'
import Meta from '../components/Meta'

const agence = () => {
    return (
        <>
            <Meta
                title={"Webzh Agence | Notre Agence"}
                description={"Envie de créer un site web ou une application web ? Vous êtes au bon endroit !"}
            />
            <Header />
            <section className='header_textContainer'>

                <div className='header_textContainer--flex'>
                    <h1>
                        L&apos;agence Web<br />
                        à l’échelle<br />
                        humaine.
                    </h1>
                    <span className="dot1">
                        <span className="dot2"></span>
                    </span>
                </div>
                <p>Découvrez notre agence</p>
            </section >
            <section className='agenceTexte'>
                <h2>
                    Webzh Agence
                </h2>
                <p>
                    Notre agence web basée en Bretagne. Etant tous les 2 développeurs de métier, notre champ d’action gravite autour de la création de sites et d’applications webs. Nous sommes une Agence familiale à échelle humaine très à l’écoute de nos clients et de leurs besoins.
                </p>
            </section>
            <section className='agenceImages'>
                <div className='agenceImages__Card'>
                    <div className='agenceImages__Container'>
                        <img className='agenceImages__Container--img' src="/img/imgSite/1651058775675 (1).jpg" alt="photo développeur jean" ></img>
                    </div>
                    <h3>Jean Choquet</h3>
                    <p>Développeur Full Stack</p>
                </div>
                <div className='agenceImages__Card'>
                    <div className='agenceImages__Container'>
                        <img className='agenceImages__Container--img' src="/img/imgSite/avatarchloe.png" alt="photo développeur jean"></img>
                    </div>
                    <h3>Chloé Choquet</h3>
                    <p>Développeur Front end</p>
                </div>
            </section>
            <ContactUs />
        </>
    );
};

export default agence;