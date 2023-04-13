import React from 'react';
import Meta from '../components/Meta';
import { projects } from "../projectsData";
import Link from "next/link";
import { useEffect, useState } from 'react'
import { path } from "../config";
import ContactUs from "../components/ContactUs";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';
import Image from 'next/image'


const projets = () => {
    return (
        <>
            <Meta
                title={"Webzh Agence - Nos projets"}
                description={"Vous trouverez ici tout les principaux projets web que nous avons créé."}
            />
            <Header />
            <section className='header_textContainer'>

                <div className='header_textContainer--flex'>
                    <div>
                        <h1>
                            Découvrez
                        </h1>
                        <h1>
                            les projets que nous
                        </h1>
                        <h1>
                            avons réalisé.
                        </h1>
                    </div>


                </div>
                <p>Vous aussi, donnez vie à vos idées.</p>
            </section>

            <section className='projectPage'>
                {projects.map((project) => (

                    <div key={project.id} className='projectPageContainer'>
                        <img layout='fill' className={"projectPageContainer__Mockup"} src={project.mockup} alt={'mockup projet' + project.title} />
                        <div className='projectPageContainer__Text'>
                            <h3 className='projectPageContainer__Text--Title'>{project.title}</h3>
                            <h4 className='projectPageContainer__Text--Languages'>{project.languages}</h4>
                            <p className='projectPageContainer__Text--Infos'>{project.infos}</p>

                            <a className='buttonFront' href={project.link} target="_blank" rel="noopener noreferrer">
                                Voir le projet
                            </a>

                        </div>
                    </div>

                ))}
                <ScrollButton />
            </section>

            <ContactUs />

        </>
    );
};

export default projets;