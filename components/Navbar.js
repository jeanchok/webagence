import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">Accueil</Link>
                </li>
                <li>
                    <Link href="/projets">Projets</Link>
                </li>
                <li>
                    <Link href="/offres">Nos offres</Link>
                </li>
                <li>
                    <Link href="/agence">L'agence</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
