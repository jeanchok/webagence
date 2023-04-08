import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const router = useRouter();

    const [menuClass, setMenuClass] = useState(false);

    const changeClass = () => {
        setMenuClass(!menuClass);
    }
    return (


        <nav className='navbar'>
            <button className={!menuClass ? "mobileMenu container" : "mobileMenu container change"} onClick={changeClass} aria-label="Navigation">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </button>
            <ul className={!menuClass ? 'none' : 'list'}>
                <div className={'listInner'}>
                    <li className={router.pathname == "/" ? "activeLine" : ""}>
                        <Link href="/">
                            <a className={router.pathname == "/" ? "active" : ""}>
                                Accueil
                            </a></Link>
                    </li>
                    <li className={router.pathname == "/projets" ? "activeLine" : ""}>
                        <Link href="/projets">
                            <a className={router.pathname == "/projets" ? "active" : ""}>
                                Projets
                            </a></Link>
                    </li>
                    <li className={router.pathname == "/offres" ? "activeLine" : ""}>
                        <Link href="/offres">
                            <a className={router.pathname == "/offres" ? "active" : ""}>
                                Nos offres
                            </a></Link>
                    </li>
                    <li className={router.pathname == "/agence" ? "activeLine" : ""}>
                        <Link href="/agence">
                            <a className={router.pathname == "/agence" ? "active" : ""}>
                                L&apos;agence
                            </a>
                        </Link>
                    </li>
                    <li className={router.pathname == "/contact" ? "activeLine" : ""}>
                        <Link href="/contact">
                            <a className={router.pathname == "/contact" ? "active" : ""}>
                                Contact
                            </a>
                        </Link>
                    </li>
                </div>
            </ul>

        </nav>

    );
};

export default Navbar;
