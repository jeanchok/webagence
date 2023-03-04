import React from 'react';

const Offers = ({ offer }) => {
    return (
        <div className='offersCard'>
            <div className='offersCard__header'>
                <img src={offer.logoSrc} alt={offer.title + `illustration`} />
                <h3>{offer.title}</h3>
            </div>
            <div className='offersCard__bar'>
            </div>
            <div className='offersCard__text '>
                <p>
                    {offer.text}
                </p>
            </div>
        </div>
    );
};

export default Offers;