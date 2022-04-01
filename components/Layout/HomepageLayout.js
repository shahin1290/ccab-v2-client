import Header from "./Header/Header";
import Footer from "./Footer";

const HomepageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomepageLayout;
