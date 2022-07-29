import React from 'react';
import Meta from '../components/Meta';
import { projects } from "../projectsData";
import Link from "next/link";
import { useEffect, useState } from 'react'
import { path } from "../config";
import ContactUs from "../components/ContactUs";
import Header from '../components/Header';

const projets = () => {
    return (
        <div>
            <Meta
                title={"Portoflio dev, les tous derniers projets réalisés"}
                description={"Suite de 70 mots"}
            />
            <ul>
                <section className='sectionProjets'>
                    <Header />
                    <h1>Nos projets</h1>
                    {projects.map((project) => (
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
                    ))}
                </section>
            </ul>
            <ContactUs />
        </div>
    );
};

export default projets;