import Header from "./Header/Header";
import Footer from "./Footer";

const HomepageLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default HomepageLayout;
