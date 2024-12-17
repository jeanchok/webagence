import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import ContactUs from "../components/ContactUs";
import { useEffect, useState } from "react";
import { projects } from "../projectsData";
import Link from "next/link";
import { path } from "../config";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Fullpage, {
  FullpageSection,
  FullPageSections,
} from "@ap.cx/react-fullpage";
import ScrollButton from "../components/ScrollButton";
import { useInView } from "react-intersection-observer";
import Aos from "aos";

export default function Home() {
  const [activeTitle, setActiveTitle] = useState("");
  const [activeText, setActiveText] = useState("");
  const [section2State, setSection2State] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(
    () => handleChange(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [section2State]
  );

  const handleChange = () => {
    if (section2State === 1) {
      setActiveTitle("Design");
      setActiveText(
        "Vous avez une idée de site web ? Nous sommes là pour en réaliser la maquette ! Grâce à notre expertise nous pourrons trouver ensemble le design qui vous convient et qui sera le plus adapté à votre activité."
      );
    }
    if (section2State === 2) {
      setActiveTitle("Création de site");
      setActiveText(
        "Vous souhaitez un site web pour vous ou votre entreprise ? Que ce soit un site vitrine, un blog ou un site sur-mesure, nous pouvons le réaliser. Nous nous adaptons selon vos envies et votre budget pour donner vie à vos projets."
      );
    }
    if (section2State === 3) {
      setActiveTitle("Hébergement");
      setActiveText(
        "Nous hébergeons sur nos serveurs votre site web. C’est parfois difficile de gérer sur plusieurs plateformes un seul site web c’est donc pour cela que nous proposons cette offre à 360°."
      );
    }
    if (section2State === 4) {
      setActiveTitle("Maintenance");
      setActiveText(
        "Vous souhaitez résoudre des problèmes ou effectuer des améliorations sur votre site web ? Nous avons les compétences nécessaires : Wordpress, Javascript, React, Node.js… N’hésitez pas à nous contacter pour en discuter !"
      );
    }
    if (section2State === 5) {
      setActiveTitle("Conseils");
      setActiveText(
        "Vous souhaitez concrétiser votre projet mais quelques interrogations demeurent ? Nous pouvons vous conseiller pour vous apporter les clés nécessaires à sa réalisation grâce à notre expertise du monde du web."
      );
    }
  };

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
        <div className="absolute -bottom-[150px] sm:-bottom-[80px] left-0 right-0 flex flex-col items-center justify-center gap-4 z-10">
          <div className="animated-border flex flex-col items-center justify-center gap-4 w-4/5 p-4 bg-white rounded-md">
            <span className="text-[#FF6060] font-semibold sm:text-3xl text-xl text-center">
              Demandez votre devis gratuit
            </span>
            <Link href="https://forms.gle/DoXGPtBHLjyKdhyJA" target="_blank">
              <div className="cursor-pointer py-2 px-4 bg-[#FF6060] border-2 text-white rounded-sm w-[100px] text-center transition-all duration-300 hover:border-[#FF6060] hover:bg-white hover:text-[#FF6060] text-xl">
                Devis
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="4000"
        className="section2 pt-10"
      >
        <img
          layout="fill"
          src={"/img/imgSite/laptop-2298286.png"}
          className="section2__img"
          alt="illustration ordinateur"
        />
        <div className="section2__container">
          <div
            data-aos="fade-up"
            className="section2__container--dotsContainer"
          >
            <span
              className={section2State === 1 ? "dot dotactive" : "dot"}
            ></span>
            <span
              data-aos="fade-up"
              className={section2State === 2 ? "dot dotactive" : "dot"}
            ></span>
            <span
              className={section2State === 3 ? "dot dotactive" : "dot"}
            ></span>
            <span
              className={section2State === 4 ? "dot dotactive" : "dot"}
            ></span>
            <span
              className={section2State === 5 ? "dot dotactive" : "dot"}
            ></span>
          </div>
          <div data-aos="fade-up" className="section2__container--menu">
            <ul>
              <li>
                <button
                  className={section2State === 1 ? "activeButtonS2" : null}
                  onClick={() => setSection2State(1)}
                >
                  Design
                </button>
              </li>
              <li>
                <button
                  className={section2State === 2 ? "activeButtonS2" : null}
                  onClick={() => setSection2State(2)}
                >
                  Création
                </button>
              </li>
              <li>
                <button
                  className={section2State === 3 ? "activeButtonS2" : null}
                  onClick={() => setSection2State(3)}
                >
                  Hébergement
                </button>
              </li>
              <li>
                <button
                  className={section2State === 4 ? "activeButtonS2" : null}
                  onClick={() => setSection2State(4)}
                >
                  Maintenance
                </button>
              </li>
              <li>
                <button
                  className={section2State === 5 ? "activeButtonS2" : null}
                  onClick={() => setSection2State(5)}
                >
                  Conseils
                </button>
              </li>
            </ul>
          </div>
          <div className="section2__container--textContainer">
            <h2 data-aos="fade-up">{activeTitle}</h2>
            <p>{activeText}</p>
          </div>
        </div>
        <div className="line"></div>
        <ScrollButton />
      </section>
      <section data-aos="fade-up" data-aos-duration="4000" className="section3">
        <h2>Nos projets</h2>
        <AliceCarousel autoPlay autoPlayInterval="3000">
          {projects.map((project) => (
            <div key={project.id} className="projectContainer">
              <img
                layout="fill"
                className="sliderimg"
                src={project.img}
                alt={"image projet + project.title"}
              />
              <div className="projectContainer__Overlay"></div>
              <h3 className="projectContainer__Title">{project.title}</h3>
              <h4 className="projectContainer__Languages">
                {project.languages}
              </h4>
              <p className="projectContainer__Infos">{project.infos}</p>
              {project.link ? (
                <a
                  className="buttonFront"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </a>
              ) : null}
            </div>
          ))}
        </AliceCarousel>
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
