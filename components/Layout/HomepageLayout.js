import Header from "./Header/Header";
import Footer from "./Footer";
import { useMenuContext } from "../shared/MenuProvider";
import { HeaderData } from "../../dummydata/HomePageData";

const HomepageLayout = ({ children }) => {
  const menu = useMenuContext();

  const {
    logoLink,
    description,
    services,
    quickLinks,
    contactUs,
    copyrightText,
    socialLinks,
  } = menu;

  const {
    pic,
    navLinks,
  } = menu.HeaderData;

  return (
    <main>
      <Header Media={pic} navLinks={navLinks} />
      {children}
      <Footer
        logoLink={logoLink}
        description={description}
        services={services}
        quickLinks={quickLinks}
        contactUs={contactUs}
        copyrightText={copyrightText}
        socialLinks={socialLinks}
      />
    </main>
  );
};

export default HomepageLayout;
