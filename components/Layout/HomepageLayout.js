import Header from "./Header/Header";
import Footer from "./Footer";
import { useMenuContext } from "../shared/MenuProvider";

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

  return (
    <main>
      <Header/>
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
