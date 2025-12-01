import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import ContactUs from "../components/ContactUs";
import { useEffect } from "react";
import { projects } from "../projectsData";
import Link from "next/link";
import { path } from "../config";
import Fullpage, {
  FullpageSection,
  FullPageSections,
} from "@ap.cx/react-fullpage";
import ScrollButton from "../components/ScrollButton";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Head />
      <Meta
        title={"Webmtl Agence | Donnez vie à vos projets"}
        description={
          "Envie de créer un site web ou une application web ? Vous êtes au bon endroit !"
        }
      />
      <Header />
      <section className="header_textContainer relative pb-[100px]">
        <div className="header_textContainer--flex">
          {/* <h1>Design. <br />
            Création de site. <br />
            Applications web.</h1> */}
          <div>
            <h1>Design.</h1>
            <h1>Création de site.</h1>
            <h1>Applications web.</h1>
          </div>
        </div>
        <p className="sm:pb-[50px]">
          L’agence web à l’échelle humaine, pour donner vie à vos projets.
        </p>
        <div className="absolute -bottom-[250px] sm:-bottom-[80px] left-0 right-0 flex flex-col items-center justify-center gap-4 z-10 px-4">
          <div className="relative group w-full max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6060] to-[#ff9797] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 w-full p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20">
              <div className="flex flex-col gap-2 text-center sm:text-left">
                <span className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
                  Un projet en tête ?
                </span>
                <span className="text-lg sm:text-xl text-[#FF6060] font-medium">
                  Demandez votre devis gratuit dès aujourd'hui
                </span>
              </div>
              <Link href="https://forms.gle/DoXGPtBHLjyKdhyJA" target="_blank">
                <button className="px-8 py-4 bg-gradient-to-r from-[#FF6060] to-[#ff4d4d] text-white font-bold rounded-xl shadow-lg transform transition hover:-translate-y-1 hover:shadow-2xl hover:scale-105 active:scale-95">
                  Obtenir mon devis
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto mt-[250px] sm:mt-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour votre réussite digitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Design",
              desc: "Maquettes visuellement attrayantes et adaptées à votre activité.",
              icon: "🎨",
            },
            {
              title: "Création de site",
              desc: "Sites vitrines, blogs ou sur-mesure, adaptés à votre budget.",
              icon: "💻",
            },
            {
              title: "Hébergement",
              desc: "Solutions d'hébergement fiables et performantes sur nos serveurs.",
              icon: "☁️",
            },
            {
              title: "Maintenance",
              desc: "Mises à jour, corrections et améliorations continues.",
              icon: "🛠️",
            },
            {
              title: "Conseils",
              desc: "Expertise et stratégie pour concrétiser vos projets web.",
              icon: "💡",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre Processus
            </h2>
            <p className="text-xl text-gray-600">
              Une méthodologie éprouvée pour des résultats optimaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Recherche",
                desc: "Analyse de vos besoins et de votre marché cible.",
              },
              {
                step: "02",
                title: "Design",
                desc: "Création de maquettes et validation visuelle.",
              },
              {
                step: "03",
                title: "Développement",
                desc: "Intégration technique et fonctionnalités.",
              },
              {
                step: "04",
                title: "Livraison",
                desc: "Mise en ligne, tests et formation.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#E8E6E1] p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="text-5xl font-bold text-gray-300 group-hover:text-gray-900 transition-colors duration-300 block mb-4">
                  {item.step}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 max-w-7xl mx-auto" id="projects">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Projets
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez nos dernières réalisations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.img}
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
      </section>
      <section>
        <h2 className="mt-[50px] mb-[25px] font-bold text-[64px] text-[#FF6060]">
          Vos Avis
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-20 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-[#FF6060] flex items-center justify-center text-white text-xl font-bold">
                YB
              </div>
              <div className="ml-4">
                <h3 className="font-bold">Yohann B.</h3>
                <p className="text-gray-600">Gérant de site e-commerce</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Une équipe à l'écoute qui a parfaitement compris nos besoins.
              Notre nouveau site est moderne, facile à utiliser et nous a permis
              d'augmenter notre visibilité. Je recommande vivement !"
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-[#FF6060] flex items-center justify-center text-white text-xl font-bold">
                RD
              </div>
              <div className="ml-4">
                <h3 className="font-bold">Rozenn D.</h3>
                <p className="text-gray-600">Tisserande</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Grâce à Webzh, j'ai enfin un site qui représente mon
              savoir-faire. Le design est soigné et le suivi est impeccable. Un
              vrai plus pour mon activité !"
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-[#FF6060] flex items-center justify-center text-white text-xl font-bold">
                VP
              </div>
              <div className="ml-4">
                <h3 className="font-bold">Victor P.</h3>
                <p className="text-gray-600">Entrepreneur</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Un travail professionnel du début à la fin. L'équipe a su mettre
              en valeur nos projets avec un site élégant qui correspond
              parfaitement à notre image. Je n'hésite pas à les recommander."
            </p>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
}
