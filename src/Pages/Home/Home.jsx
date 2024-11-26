import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import OurOffers from "../../components/OurOffers/OurOffers";
import OurPowers from "../../components/OurPowers/OurPowers";
import ReadBlog from "../../components/ReadBlog/ReadBlog";
import ContactPart from "../../components/ContactPart/ContactPart";
import Footer from "../../components/Footer/Footer";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <div className="relative z-10 w-full">
        <Navbar />
      </div>
      <div className="relative -top-32 mb-0">
        <Banner />
      </div>
      <div className="mt-0">
        <OurOffers />
      </div>
      <div className="">
        <OurPowers />
      </div>
      <div className="">
        <ReadBlog />
      </div>
      <div className="">
        <ContactPart />
      </div>
      <div className="mt-24">
        <NewsLetter />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
