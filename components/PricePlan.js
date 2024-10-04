import React from "react";
import Link from "next/link";

const PricePlan = ({ pricePlan }) => {
  return (
    <div className="pricePlanCard">
      <div className="pricePlanCard__tilte">{pricePlan.title}</div>
      <div className="pricePlanCard__desc">{pricePlan.description}</div>
      <div className="pricePlanCard__priceContainer">
        <p className="ricePlanCard__priceContainer--price">{pricePlan.price}</p>
      </div>
      {pricePlan.title === `Basique Wordpress` ? <p> {pricePlan.ps}</p> : null}
      <div className="pricePlanCard__sub">
        <h3>Abonnement</h3>
        <div className="pricePlanCard__sub--text">
          {pricePlan.title === `100% personnalisé Framer` ? (
            pricePlan.subsription.map((subsription, index) => (
              <p key={index}>{subsription}</p>
            ))
          ) : (
            <p> {pricePlan.subsription}</p>
          )}
        </div>
      </div>
      <div className="pricePlanCard__host">
        <h3>Hébergement & Nom de domaine</h3>
        <div className="pricePlanCard__host--text">{pricePlan.hosting}</div>
      </div>

      {pricePlan.title === `Application Web custom` ? (
        <>
          <div className="pricePlanCard__tech">
            <h3>Technologie</h3>
            <div className="pricePlanCard__tech--text">
              {pricePlan.techno.map((techno, index) => (
                <p key={index}>{techno}</p>
              ))}
            </div>
          </div>
          <Link
            href="/contact"
            className="ContactUs__Container--text-link buttonFront"
          >
            Contact
          </Link>
        </>
      ) : (
        <>
          {/* <div className='pricePlanCard__tech'>
                            <h3>Technologie</h3>
                            <div className='pricePlanCard__tech--text'>
                                {pricePlan.techno}
                            </div>
                        </div>*/}
          <div className="pricePlanCard__include">
            <h3>Inclus</h3>
            <div className="pricePlanCard__include--text">
              {pricePlan.include.map((include, index) => (
                <p key={index}>{include}</p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PricePlan;
