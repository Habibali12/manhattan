import React from "react";
import Header from "../components/header";
import Description from "../components/description";
import SearchFrom from "../components/searchfrom";
import BestSeller from "../components/bestseller";
import NewBestSeller from "../components/new_bestseller";

const Home = () => {
  return (
    <>
      <Header />
      <Description />
      <SearchFrom />
      <BestSeller />
      <NewBestSeller />
    </>
  );
};
export default Home;
