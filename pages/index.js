import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUs from "../components/ContactUs";
import { useEffect, useState } from 'react'
import { projects } from "../projectsData";
import Link from "next/link";
import { path } from "../config";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Fullpage, { FullpageSection, FullPageSections } from '@ap.cx/react-fullpage';
import ScrollButton from '../components/ScrollButton';

export default function Home() {
  const [activeTitle, setActiveTitle] = useState("");
  const [activeText, setActiveText] = useState("");
  const [section2State, setSection2State] = useState(1);


  useEffect(() => handleChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [section2State]);

  const handleChange = () => {

    if (section2State === 1) {
      console.log(section2State);
      console.log("1");
      setActiveTitle("Conseils");
      setActiveText("Voici les conseils que l'on va donner : Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ")
    } if (section2State === 2) {
      console.log(section2State);
      console.log("2");
      setActiveTitle("Maquettes");
      setActiveText("Voici les maquette que l'on fera : Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ")
    } if (section2State === 3) {
      console.log(section2State);
      console.log("3");
      setActiveTitle("Création");
      setActiveText("Voici les Création que l'on fera : Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ")
    }
    if (section2State === 4) {
      console.log(section2State);
      console.log("4");
      setActiveTitle("Maintenance");
      setActiveText("Voici les Maintenance que l'on fera : Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ")
    }
    if (section2State === 5) {
      console.log(section2State);
      console.log("5");
      setActiveTitle("Web App");
      setActiveText("Voici les Web App que l'on fera : Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ")
    }
  }


  return (
    <>

      {/* <FullpageSection className='maxWidthnone'> */}
      <Header />
      <section className='header_textContainer'>

        <div className='header_textContainer--flex'>
          <h1>
            Design. <br />
            Création de site. <br />
            Applications web.
          </h1>
          <span className="dot1">
            <span className="dot2"></span>
          </span>
        </div>
        <p>L’agence web à l’échelle humaine, pour donner vie à vos projets</p>
      </section>
      {/* </FullpageSection> */}

      {/* Section 2 Texte  */}
      {/* <FullpageSection> */}
      <section className="section2">
        <img src={path + '/img/imgSite/laptop-2298286.png'} className='section2__img'></img>
        <div className='section2__container'>
          <div className='section2__container--dotsContainer'>
            <span className={(section2State === 1) ? 'dot dotactive' : 'dot'}></span>
            <span className={(section2State === 2) ? 'dot dotactive' : 'dot'}></span>
            <span className={(section2State === 3) ? 'dot dotactive' : 'dot'}></span>
            <span className={(section2State === 4) ? 'dot dotactive' : 'dot'}></span>
            <span className={(section2State === 5) ? 'dot dotactive' : 'dot'}></span>
          </div>
          <div className='section2__container--menu'>
            <ul>
              <li>
                <button className={(section2State === 1) ? 'activeButtonS2' : null} onClick={() => setSection2State(1)}>Conseils</button>
              </li>
              <li>
                <button className={(section2State === 2) ? 'activeButtonS2' : null} onClick={() => setSection2State(2)}>Maquettage</button>
              </li>
              <li>
                <button className={(section2State === 3) ? 'activeButtonS2' : null} onClick={() => setSection2State(3)}>Création</button>
              </li>
              <li>
                <button className={(section2State === 4) ? 'activeButtonS2' : null} onClick={() => setSection2State(4)}>Maintenance</button>
              </li>
              <li>
                <button className={(section2State === 5) ? 'activeButtonS2' : null} onClick={() => setSection2State(5)}>Web App</button>
              </li>
            </ul>
          </div>
          <div className='section2__container--textContainer'>
            <h2>{activeTitle}</h2>
            <p>{activeText}</p>
          </div>
        </div>
        <ScrollButton />
      </section>
      {/* </FullpageSection> */}

      {/* Section 3 Slider  */}
      {/* <FullpageSection> */}
      <section className='section3'>
        <h2>Nos projets</h2>
        <AliceCarousel autoPlay autoPlayInterval="3000">
          {projects.map((project) => (
            <div key={project.id} className='projectContainer'>
              <img className="sliderimg" src={path + project.img}></img>
              <h3 className='projectContainer__Title'>{project.title}</h3>
              <h4 className='projectContainer__Languages'>{project.languages}</h4>
              <p className='projectContainer__Infos'>{project.infos}</p>
              <Link href="projects/[id]" as={"projects/" + project.id}>
                <a className='buttonFront'>
                  Voir le projet
                </a>
              </Link>
            </div>
          ))}
        </AliceCarousel>
        {/* <ScrollButton /> */}
      </section>

      {/* </FullpageSection> */}
      {/* <FullpageSection className='maxWidthnone lastIndexSection' > */}
      <ContactUs />
      {/* <ScrollButton /> */}
      <Footer />
      {/* </FullpageSection> */}
      {/* </FullPageSections>
      </Fullpage> */}
    </>
  )
}
