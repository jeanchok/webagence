import React from "react";
import ContactUs from "../components/ContactUs";
import Header from "../components/Header";
import ScrollButton from "../components/ScrollButton";

import Image from "next/image";
import Meta from "../components/Meta";
import PricePlan from "../components/PricePlan";

const offers = () => {
  const offers = [
    {
      logoSrc: "./img/imgSite/creation-de-sites-web.png",
      title: `Design & Maquettage`,
      text: `Transformez votre idée de site web en réalité avec notre expertise en design et maquettage ! Ensemble, nous élaborerons une maquette visuellement attrayante et adaptée à votre activité pour vous démarquer de la concurrence. Laissez-vous séduire par nos créations uniques et personnalisées pour une expérience utilisateur optimale.`,
    },
    {
      logoSrc: "./img/imgSite/prototype.png",
      title: `Création de site`,
      text: `Donnez vie à votre projet de site web, qu'il s'agisse d'un site vitrine, d'un blog ou d'une solution sur-mesure pour vous ou votre entreprise. Nous nous adaptons à vos envies et à votre budget, en proposant des designs captivants et des fonctionnalités adaptées à vos besoins. Rejoignez notre clientèle satisfaite et propulsez votre présence en ligne !`,
    },
    {
      logoSrc: "./img/imgSite/serveur.png",
      title: `Hébergement`,
      text: `Optez pour notre solution d'hébergement fiable et performante pour votre site web. Simplifiez-vous la vie en centralisant tous vos services sur une seule plateforme. Nos serveurs sécurisés et notre assistance technique vous garantissent une expérience sans tracas et une tranquillité d'esprit à 360°.`,
    },
    {
      logoSrc: "./img/imgSite/entretien.png",
      title: `Maintenance`,
      text: `Ne laissez pas les problèmes techniques freiner votre activité en ligne. Notre équipe d'experts sont là pour résoudre vos problèmes et apporter des améliorations à votre site web. N'hésitez pas à nous contacter pour discuter de vos besoins et bénéficier d'un service sur-mesure ! (à partir de 100$ / mois)`,
    },
    {
      logoSrc: "./img/imgSite/20943456.png",
      title: `Conseils & stratégie`,
      text: `Vous avez un projet en tête mais vous ne savez pas par où commencer ? Notre équipe de professionnels est là pour vous guider et vous fournir les conseils stratégiques nécessaires à la réussite de votre projet. Profitez de notre expertise du monde du web et des meilleures pratiques pour maximiser votre impact en ligne et atteindre vos objectifs.`,
    },
  ];

  const pricePlan = [
    //{
    //    price: '499 €',
    //    title: `100% personnalisé Framer`,
    //    description: `L’offre complète pour les sites vitrines avec un design sur-mesure`,
    //    subsription: [`· Payé annuellement : 18€ TTC/mois`, `· Mensuellement : 24€ TTC/mois`],
    //    hosting: `Inclus dans l’abonnement`,
    //    techno: `Framer`,
    //    include: [`· Design 100% personnalisé`, `· Rédaction des textes`, `· 1 Collection de Contenu Gérable`, `· Création de site web`, `· Mise en ligne de site web`],
    //},
    {
      price: "800 $",
      title: "1 Page - Basique",
      ps: "*En supplément du coût du thème, si celui-ci est payant.",
      description:
        "L’offre basique pour les sites 1 page avec un thème sur-mesure.",
      subsription: "Abonnement à partir de 27 $/mois",
      hosting: "Nom de domaine gratuit la première année",
      techno: "Wix",
      include: [
        "· Site vitrine",
        "· 1 pages",
        "· Design responsive",
        "· Google Map",
        "· SEO",
      ],
    },
    {
      price: "1400 $",
      title: "Basique+",
      ps: "*En supplément du coût du thème, si celui-ci est payant.",
      description:
        "L’offre basique pour les sites vitrines avec un thème sur-mesure.",
      subsription: "Abonnement à partir de 27 $/mois",
      hosting: "Nom de domaine gratuit la première année",
      techno: "Wix",
      include: [
        "· Site vitrine",
        "· 5 pages",
        "· Design responsive",
        "· Google Map",
        "· SEO",
      ],
    },
    {
      price: "2000 $",
      title: "Premium",
      description:
        "L’offre complète pour les sites haut de gamme avec un design sur-mesure.",
      subsription: "Abonnement à partir de 27 $/mois",
      hosting: "Nom de domaine gratuit la première année",
      techno: "Wix",
      include: [
        "· 10 pages",
        "· Réservation en ligne",
        "· Commande en ligne",
        "· 2 langues",
        "· Design responsive",
        "· Google Map",
        "· SEO",
      ],
    },
    {
      price: "Custom",
      title: `Application Web custom`,
      description: `L’offre sur-mesure pour des application web custom`,
      subsription: `Suivant les besoins`,
      hosting: `Suivant les besoins`,
      techno: [
        `Frontend : Next.js, React, JS`,
        `Backend : Node.js, Supabase, Express`,
      ],
      include: ``,
    },
  ];

  return (
    <div>
      <Meta
        title={"Webmtl Agence | Nos offres à 360°"}
        description={
          "Envie de créer un site web ou une application web ? Vous êtes au bon endroit !"
        }
      />
      <Header />
      <section className="header_textContainer">
        <div className="header_textContainer--flex">
          <div>
            <h1>Nos offres à 360°.</h1>
            <h1>Nous nous occupons de tout.</h1>
          </div>
        </div>
        <p>Toute votre transition digitale, au même endroit.</p>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Offres</h2>
          <p className="text-xl text-gray-600">
            Des solutions adaptées à tous les besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricePlan.map((plan, index) => (
            <PricePlan key={index} pricePlan={plan} />
          ))}
        </div>
      </section>

      <section className="py-20 sm:p-20 bg-gray-50 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Compétences
            </h2>
            <p className="text-xl text-gray-600">
              Une expertise complète pour votre réussite
            </p>
          </div>

          <div className="space-y-20">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
                data-aos="fade-up"
              >
                <div className="flex-1 w-full relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={offer.logoSrc}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {offer.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {offer.text}
                  </p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Processus
          </h2>
          <p className="text-xl text-gray-600">
            De l'idée à la réalisation en 4 étapes simples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Découverte",
              desc: "Nous analysons vos besoins et définissons ensemble les objectifs de votre projet.",
            },
            {
              step: "02",
              title: "Stratégie",
              desc: "Élaboration de l'architecture, du design et du plan d'action détaillé.",
            },
            {
              step: "03",
              title: "Création",
              desc: "Développement et intégration de votre solution avec des points d'étape réguliers.",
            },
            {
              step: "04",
              title: "Lancement",
              desc: "Mise en ligne, formation et suivi pour assurer un démarrage réussi.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-[#FF6060] text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                {item.step}
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ScrollButton />
      <ContactUs />
    </div>
  );
};

export default offers;
