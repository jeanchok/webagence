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
import Fullpage, { FullpageSection, FullPageSections } from '@ap.cx/react-fullpage';

const projets = () => {
    return (
        <>
            <Meta
                title={"Portoflio dev, les tous derniers projets réalisés"}
                description={"Suite de 70 mots"}
            />
            {/* <FullpageSection className='maxWidthnone'> */}
            <Header />
            <section className='header_textContainer'>

                <div className='header_textContainer--flex'>
                    <h1>
                        Découvrez <br />
                        les projets que nous<br />
                        avons réalisé.
                    </h1>

                </div>
                <p>Vous aussi, donnez vie à vos idées.</p>
            </section>
            {/* </FullpageSection> */}

            {/* <section className='sectionProjets'> */}
            <section className='projectPage'>
                {projects.map((project) => (

                    <>
                        <div key={project.id} className='projectPageContainer'>
                            <img className={"projectPageContainer__Mockup"} src={path + project.mockup}></img>
                            <div className='projectPageContainer__Text'>
                                <h3 className='projectPageContainer__Text--Title'>{project.title}</h3>
                                <h4 className='projectPageContainer__Text--Languages'>{project.languages}</h4>
                                <p className='projectPageContainer__Text--Infos'>{project.infos}</p>
                                {/* <Link href="projects/[id]" as={"projects/" + project.id}> */}
                                <a className='buttonFront' href={project.link} target="_blank" rel="noopener noreferrer">
                                    Voir le projet
                                </a>
                                {/* </Link> */}
                            </div>
                        </div>

                    </>

                ))}
                <ScrollButton />
            </section>

            {/* <FullpageSection className='maxWidthnone lastIndexSection' > */}
            <ContactUs />
            {/* </FullpageSection> */}
        </>
    );
};

export default projets;