import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import NewsletterSignup from "./NewsletterSignup";
import useSiteMetaData from "./SiteMetadata";

const Layout = ({ children, hideHeader, hideFooter }) => {
  const { title, description } = useSiteMetaData();
  return (
    <div>
      {!hideHeader && <Header />}
      {children}
      <NewsletterSignup />
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
