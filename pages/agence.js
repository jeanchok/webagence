import React from "react";
import ContactUs from "../components/ContactUs";
import Header from "../components/Header";
import Image from "next/image";
import Meta from "../components/Meta";

const agence = () => {
  return (
    <>
      <Meta
        title={"Webmtl Agence | Notre Agence"}
        description={
          "Envie de créer un site web ou une application web ? Vous êtes au bon endroit !"
        }
      />
      <Header />
      <section className="header_textContainer">
        <div className="header_textContainer--flex">
          <div>
            <h1>L&apos;agence Web</h1>
            <h1>à l’échelle</h1>
            <h1>humaine.</h1>
          </div>
        </div>
        <p>Découvrez notre agence.</p>
      </section>
      <section className="agenceTexte">
        <h2>Webmtl Agence</h2>
        <p>
          Notre agence web basée à Montréal. Etant tous les 3 développeurs de
          métier, notre champ d’action gravite autour de la création de sites et
          d’applications webs. Nous sommes une Agence à échelle humaine très à
          l’écoute de nos clients et de leurs besoins.
        </p>
      </section>
      <section className="agenceImages">
        <div className="agenceImages__Card">
          <div className="agenceImages__Container">
            <img
              className="agenceImages__Container--img"
              src="/img/imgSite/1651058775675 (1).jpg"
              alt="photo développeur jean"
            ></img>
          </div>
          <h3>Jean C.</h3>
          <p>Développeur Full Stack</p>
        </div>
        <div className="agenceImages__Card">
          <div className="agenceImages__Container">
            <img
              className="agenceImages__Container--img"
              src="/img/imgSite/avatarchloe.png"
              alt="photo développeur jean"
            ></img>
          </div>
          <h3>Chloé C.</h3>
          <p>Développeur Front end</p>
        </div>
        <div className="agenceImages__Card">
          <div className="agenceImages__Container">
            <img
              className="agenceImages__Container--img"
              src="/img/imgSite/mehdi.jpeg"
              alt="photo développeur medhi"
            ></img>
          </div>
          <h3>Mehdi K.</h3>
          <p>Développeur Web</p>
        </div>
      </section>
      <ContactUs />
    </>
  );
};

export default agence;
