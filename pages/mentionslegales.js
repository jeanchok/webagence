import React from "react";
import Meta from "../components/Meta";
import Header from "../components/Header";

const mentionslegales = () => {
  return (
    <div>
      <Meta
        title={"Webzh Agence | Mentions légales"}
        description={
          "Envie de créer un site web ou une application web ? Vous êtes au bon endroit !"
        }
      />
      <Header />
      <section className="header_textContainer">
        <h1>Mentions légales</h1>
      </section>
      <section className="mentionsContainer">
        <h3>Les informations légales</h3>
        <p>
          <br />
          <b>Site </b>
          <br />
          https://www.webzhagence.com
          <br />
          <b>Éditeur</b>
          <br />
          Jean Choquet
          <br />
          Siège social : Montréal, Québec, Canada
          <br />
          <b>Hébergeur</b>
          <br />
          Wix.com Inc.
          <br />
          500 Terry A François Blvd, San Francisco, CA 94158, USA
          <br />
          <b>Conditions d’utilisation du site</b>
          <br />
          La navigation sur le site https://www.webzhagence.com implique
          l'acceptation pleine et entière des conditions générales
          d'utilisation. Ces conditions peuvent être modifiées à tout moment,
          les utilisateurs sont donc invités à les consulter régulièrement.
          <br />
          <b>Protection des données à caractère personnel</b>
          <br />
          Ce site ne collecte pas de données personnelles, à l'exception des
          informations volontairement fournies par l'utilisateur via les
          formulaires de contact.
          <br />
          <b>Droits d’auteur</b>
          <br />
          Tous les contenus présents sur ce site (textes, images, logos, vidéos,
          etc.) sont protégés par les lois canadiennes et internationales sur la
          propriété intellectuelle. Toute reproduction, représentation ou
          diffusion, en tout ou en partie, du contenu de ce site sans
          autorisation préalable est strictement interdite.
          <br />
          <b>Responsabilité</b>
          <br />
          L'éditeur ne peut être tenu responsable en cas de défaillance,
          d'interruption de service ou de tout autre problème technique.
          L'utilisateur est responsable de l'utilisation qu'il fait du site et
          des mesures qu'il prend pour protéger son équipement contre les virus
          ou autres menaces en ligne.
          <br />
          <b>Gestion du site</b>
          <br />
          L'éditeur se réserve le droit de suspendre, limiter ou interrompre
          l'accès à tout ou partie du site pour des raisons de maintenance ou de
          mise à jour.
          <br />
          <b>Liens hypertextes</b>
          <br />
          La création de liens hypertextes vers le site
          https://www.webzhagence.com est soumise à l'autorisation préalable de
          l'éditeur. L'éditeur se réserve le droit de demander la suppression de
          tout lien non autorisé.
          <br />
          <b>Droit applicable – Juridiction compétente</b>
          <br />
          Les présentes conditions sont régies par les lois du Québec et du
          Canada. En cas de litige, les tribunaux de Montréal seront compétents.
        </p>
      </section>
    </div>
  );
};

export default mentionslegales;
