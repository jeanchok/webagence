import React from "react";
import Meta from "../components/Meta";
import { projects } from "../projectsData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { path } from "../config";
import ContactUs from "../components/ContactUs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import Image from "next/image";

const projets = () => {
  return (
    <>
      <Meta
        title={"Webmtl Agence - Nos projets"}
        description={
          "Vous trouverez ici tout les principaux projets web que nous avons créé."
        }
      />
      <Header />
      <section className="header_textContainer">
        <div className="header_textContainer--flex">
          <div>
            <h1>Découvrez</h1>
            <h1>les projets que nous</h1>
            <h1>avons réalisés.</h1>
          </div>
        </div>
        <p>Vous aussi, donnez vie à vos idées.</p>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.mockup || project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">
                    {project.languages.join(" • ")}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.infos}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#FF6060] font-bold hover:text-[#ff4d4d] transition-colors"
                  >
                    Voir le projet
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <ScrollButton />
      </section>

      <ContactUs />
    </>
  );
};

export default projets;
