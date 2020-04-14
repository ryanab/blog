import React from "react";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import HomePageHero from "../components/HomePageHero";

import "./index.css";

const Home = () => (
  <Layout hideHeader>
    <HomePageHero />
    <BlogRoll />
  </Layout>
);

export default Home;
