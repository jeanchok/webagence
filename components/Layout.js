import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Fullpage, { FullpageSection, FullPageSections } from '@ap.cx/react-fullpage';

const Layout = ({ children }) => {
    return (
        <>
            {/* <div className="scrollContainer"> */}
            {/* <Fullpage>
                <FullPageSections> */}


            <main>
                {children}
            </main>
            <Footer />

            {/* </FullPageSections>
            </Fullpage> */}
            {/* </div > */}
        </>
    );
};

export default Layout;
