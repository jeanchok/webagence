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
                        les différents projets <br />
                        que nous avons réalisé.
                    </h1>

                </div>
                <p>Vous aussi, donnez vie à vos idées.</p>
            </section>
            {/* </FullpageSection> */}

            {/* <section className='sectionProjets'> */}
            {projects.map((project) => (
                // <FullpageSection>
                <>
                    <div key={project.id} className='projectContainerProjets'>
                        <img className="sliderimg" src={path + project.img}></img>
                        <h3 className='projectContainerProjets__Title'>{project.title}</h3>
                        <h4 className='projectContainerProjets__Languages'>{project.languages}</h4>
                        <p className='projectContainerProjets__Infos'>{project.infos}</p>
                        <Link href="projects/[id]" as={"projects/" + project.id}>
                            <a className='buttonFront'>
                                Voir le projet
                            </a>
                        </Link>
                    </div>
                    <ScrollButton />
                </>
                // </FullpageSection>
            ))}
            {/* </section> */}
            {/* <FullpageSection className='maxWidthnone lastIndexSection' > */}
            <ContactUs />
            <Footer />
            {/* </FullpageSection> */}
        </>
    );
};

export default projets;