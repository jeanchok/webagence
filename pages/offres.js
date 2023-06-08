import React from 'react';
import ContactUs from "../components/ContactUs";
import Header from '../components/Header';
import ScrollButton from '../components/ScrollButton';
import Offers from '../components/Offers';
import Image from 'next/image'
import Meta from '../components/Meta'
import PricePlan from '../components/PricePlan';

const offers = () => {

    const offers = [
        {
            logoSrc: './img/imgSite/creation-de-sites-web.png',
            title: `Design & Maquettage`,
            text: `Transformez votre idée de site web en réalité avec notre expertise en design et maquettage ! Ensemble, nous élaborerons une maquette visuellement attrayante et adaptée à votre activité pour vous démarquer de la concurrence. Laissez-vous séduire par nos créations uniques et personnalisées pour une expérience utilisateur optimale.`,
        },
        {
            logoSrc: './img/imgSite/prototype.png',
            title: `Création de site`,
            text: `Donnez vie à votre projet de site web, qu'il s'agisse d'un site vitrine, d'un blog ou d'une solution sur-mesure pour vous ou votre entreprise. Nous nous adaptons à vos envies et à votre budget, en proposant des designs captivants et des fonctionnalités adaptées à vos besoins. Rejoignez notre clientèle satisfaite et propulsez votre présence en ligne !`,
        },
        {
            logoSrc: './img/imgSite/serveur.png',
            title: `Hébergement`,
            text: `Optez pour notre solution d'hébergement fiable et performante pour votre site web. Simplifiez-vous la vie en centralisant tous vos services sur une seule plateforme. Nos serveurs sécurisés et notre assistance technique vous garantissent une expérience sans tracas et une tranquillité d'esprit à 360°.`,
        },
        {
            logoSrc: './img/imgSite/entretien.png',
            title: `Maintenance`,
            text: `Ne laissez pas les problèmes techniques freiner votre activité en ligne. Notre équipe d'experts maîtrise diverses technologies, telles que Wordpress, JavaScript, React, Node.js, pour résoudre vos problèmes et apporter des améliorations à votre site web. N'hésitez pas à nous contacter pour discuter de vos besoins et bénéficier d'un service sur-mesure !`,
        },
        {
            logoSrc: './img/imgSite/20943456.png',
            title: `Conseils & stratégie`,
            text: `Vous avez un projet en tête mais vous ne savez pas par où commencer ? Notre équipe de professionnels est là pour vous guider et vous fournir les conseils stratégiques nécessaires à la réussite de votre projet. Profitez de notre expertise du monde du web et des meilleures pratiques pour maximiser votre impact en ligne et atteindre vos objectifs.`,
        }

    ]

    const pricePlan = [
        {
            price: '499 €',
            title: `100% personnalisé Framer`,
            description: `L’offre complète pour les sites vitrines avec un design sur-mesure`,
            subsription: [`· Payé annuellement : 18€ TTC/mois`, `· Mensuellement : 24€ TTC/mois`],
            hosting: `Inclus dans l’abonnement`,
            techno: `Framer`,
            include: [`· Design 100% personnalisé`, `· Rédaction des textes`, `· 1 Collection de Contenu Gérable`, `· Création de site web`, `· Mise en ligne de site web`],
        },
        {
            price: '599 €*',
            title: `Basique Wordpress`,
            ps: `*En supplément du coût du thème, si celui-ci est payant.`,
            description: `L’offre basique pour les sites vitrines avec un thème existant`,
            subsription: `Pas d’abonnement la première année`,
            hosting: `Offert la première année avec Ionos`,
            techno: `Wordpress & Ionos`,
            include: [`· Design 100% personnalisé`, `· Rédaction des textes`, `· 1 Collection de Contenu Gérable`, `· Création de site web`, `· Mise en ligne de site web`],
        },
        {
            price: '1199 €',
            title: `100% personnalisé Wordpress`,
            description: `L’offre complète pour les sites haut de gamme et e-commerce avec un design sur-mesure`,
            subsription: `Pas d’abonnement la première année`,
            hosting: `Offert la première année avec Ionos`,
            techno: `Wordpress & Ionos`,
            include: [`· Design 100% personnalisé`, `· Rédaction des textes`, `· 1 Collection de Contenu Gérable`, `· Création de site web`, `· Mise en ligne de site web`],
        },
        {
            price: 'Custom',
            title: `Application Web custom`,
            description: `L’offre sur-mesure pour des application web custom`,
            subsription: `Suivant les besoins`,
            hosting: `Suivant les besoins`,
            techno: [`Frontend : Next.js, React, JS`, `Backend : Node.js, Superbase, Express`],
            include: ``,
        },
    ]


    return (
        <div>
            <Meta
                title={"Webzh Agence | Nos offres à 360°"}
                description={"Envie de créer un site web ou une application web ? Vous êtes au bon endroit !"}
            />
            <Header />
            <section className='header_textContainer'>

                <div className='header_textContainer--flex'>
                    <div>
                        <h1>
                            Nos offres à 360°.
                        </h1>
                        <h1>
                            Nous nous occupons de tout.
                        </h1>
                    </div>
                </div>
                <p>Toute votre transition digitale, au même endroit.</p>
            </section>
            <section className='pricePlanSection'>
                <div className='pricePlanSection__title'>
                    <h2>Nos offres</h2>
                    <p>Nous avons des solutions adaptées à tous les besoins.</p>
                </div>

                <div className='pricePlan'>
                    {
                        pricePlan.map((pricePlan, index) => (
                            <PricePlan key={index} pricePlan={pricePlan} />
                        ))
                    }
                </div>

            </section>
            <section className=''>

                <div className='pricePlanSection__title'>
                    <h2>Nos Compétences</h2>
                    <p>Nous avons des solutions adaptées à tous les besoins.</p>
                </div>
                <div className='offresSection'>
                    {
                        offers.map((offer, index) => (
                            <Offers key={index} offer={offer} />
                        ))
                    }
                </div>
            </section>
            <ScrollButton />
            <ContactUs />
        </div>
    );
};

export default offers;