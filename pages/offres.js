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
            <section className=''>

                <div className='pricePlanSection__title'>
                    <h2>Notre processus de création de site web</h2>
                </div>
                <div className='process'>
                    <div className='process__left'>
                        <div className='process__card'>
                            <div className='process__card--number'>
                                <p>1</p>
                            </div>
                            <div className='process__card--text'>
                                <h3>
                                    Questionnaire
                                </h3>
                                <p>
                                    Commencez par remplir notre questionnaire détaillé. Cela nous aidera à comprendre vos besoins et à vous orienter vers l&apos;offre la plus adaptée à vos attentes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='process__right--empty'>

                    </div>
                    <div className='process__left--empty'>

                    </div>
                    <div className='process__right'>
                        <div className='process__card'>
                            <div className='process__card--number'>
                                <p>2</p>
                            </div>
                            <div className='process__card--text'>
                                <h3>
                                    Choix de l&apos;offre
                                </h3>
                                <p>
                                    En fonction de vos réponses, nous vous recommanderons l&apos;offre la plus adaptée à vos besoins. Vous aurez le choix entre différentes options pour satisfaire vos demandes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='process__left'>
                        <div className='process__card'>
                            <div className='process__card--number'>
                                <p>3</p>
                            </div>
                            <div className='process__card--text'>
                                <h3>
                                    Mood Board & Schéma du site
                                </h3>
                                <p>
                                    Nous créons d&apos;abord un Mood Board pour visualiser vos préférences en matière de design. Ensuite, grâce à Octopus, nous élaborons un schéma du site pour déterminer l&apos;ordre et la disposition des sections.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='process__right--empty'>

                    </div>
                    <div className='process__left--empty'>

                    </div>
                    <div className='process__right'>
                        <div className='process__card'>
                            <div className='process__card--number'>
                                <p>4</p>
                            </div>
                            <div className='process__card--text'>
                                <h3>
                                    Création du design sur Figma
                                </h3>
                                <p>
                                    Avec votre Mood Board et votre schéma de site en main, nous commençons à créer le design de votre site sur Figma. Nous veillons à ce que chaque élément corresponde à vos goûts et à vos objectifs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='process__left'>
                        <div className='process__card'>
                            <div className='process__card--number'>
                                <p>5</p>
                            </div>
                            <div className='process__card--text'>
                                <h3>
                                    Ajustements suivant vos retours
                                </h3>
                                <p>
                                    Nous sommes ouverts à vos retours et suggestions. Nous ferons des ajustements en fonction de vos commentaires pour assurer que le design final vous satisfait pleinement.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='process__right--empty'>

                    </div>
                    <div className='process__left--empty'>

                    </div>
                    <div className='process__right'>
                        <div className='process__card'>
                            <div className='process__card--number'>
                                <p> 6</p>
                            </div>
                            <div className='process__card--text'>
                                <h3>
                                    Déploiement du site
                                </h3>
                                <p>
                                    Une fois que le design est approuvé, nous nous chargeons de déployer votre site. Il sera entièrement fonctionnel et prêt à impressionner vos visiteurs.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <ScrollButton />
            <ContactUs />
        </div>
    );
};

export default offers;