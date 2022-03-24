import React from "react";
import Header from "../Homepage/Header/Header";

const HomepageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default HomepageLayout;
