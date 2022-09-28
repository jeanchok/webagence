import React from 'react';
import ContactUs from "../components/ContactUs";
import Header from '../components/Header';
import ScrollButton from '../components/ScrollButton';
import Image from 'next/image'

const offers = () => {
    return (
        <div>
            <Header />
            <section className='header_textContainer'>

                <div className='header_textContainer--flex'>
                    <h1>
                        Nos offres à 360°. <br />
                        Nous nous occupons de tout.
                    </h1>
                </div>
                <p>Toute votre transition digitale, au même endroit.</p>
            </section >
            <section className='offresSection'>

                <div className='offresSection__Card'>
                    <Image layout='fill' src=".\img\imgSite\creation-de-sites-web.png" alt="illustration design" />
                    <div className='offresSection__Card--Text--right'>
                        <h2>Design & Maquettage</h2>
                        <p>Vous avez une idée de site web ? Nous sommes là pour en réaliser la maquette ! Grâce à notre expertise nous pourrons trouver ensemble le design qui vous convient et qui sera le plus adapté à votre activité.</p>
                    </div>
                </div>
                <div className="line"></div>
                <div className='offresSection__Card'>

                    <div className='offresSection__Card--Text--left'>
                        <h2>Création de site</h2>
                        <p>Vous souhaitez un site web pour vous ou votre entreprise ? Que ce soit un site vitrine, un blog ou un site sur-mesure, nous pouvons le réaliser. Nous nous adaptons selon vos envies et votre budget pour donner vie à vos projets.</p>                </div>
                    <Image layout='fill' src=".\img\imgSite\prototype.png" alt="illustration création site" />
                </div>
                <div className="line"></div>
                <div className='offresSection__Card'>
                    <Image layout='fill' src=".\img\imgSite\serveur.png" alt="illustration hébergement" />
                    <div className='offresSection__Card--Text--right'>
                        <h2>Hébergement</h2>
                        <p>Nous hébergeons sur nos serveurs votre site web. C’est parfois difficile de gérer sur plusieurs plateformes un seul site web c’est donc pour cela que nous proposons cette offre à 360°.</p>                </div>
                </div>
                <div className="line"></div>
                <div className='offresSection__Card'>

                    <div className='offresSection__Card--Text--left'>
                        <h2>Maintenance</h2>
                        <p>Vous souhaitez résoudre des problèmes ou effectuer des améliorations sur votre site web ? Nous avons les compétences nécessaires : Wordpress, Javascript, React, Node.js… N’hésitez pas à nous contacter pour en discuter !</p>                </div>
                    <Image layout='fill' src=".\img\imgSite\entretien.png" alt="illustration maintenance" />
                </div>
                <div className="line"></div>
                <div className='offresSection__Card'>
                    <Image layout='fill' src=".\img\imgSite\20943456.png" alt="illustration conseils" />
                    <div className='offresSection__Card--Text--right'>
                        <h2>Conseils & stratégie</h2>
                        <p>Vous souhaitez concrétiser votre projet mais quelques interrogations demeurent ? Nous pouvons vous conseiller pour vous apporter les clés nécessaires à sa réalisation grâce à notre expertise du monde du web.</p>                </div>
                </div>

            </section>
            <ScrollButton />
            <ContactUs />
        </div>
    );
};

export default offers;