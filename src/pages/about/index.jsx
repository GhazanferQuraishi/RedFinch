import React from "react";
// import MainLayout from "../../layouts/main";
import LightLayout from "../../layouts/light";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us4";
import Services3 from "../../components/Services3";
import Skills2 from "../../components/Skills2";
import Testimonials1 from "../../components/Testimonials1";
import Team2 from "../../components/Team2";
import Services2 from "../../components/Services2";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <LightLayout>
      <PageHeader
        title="About Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "about us", url: "/about" },
        ]}
      />
      <AboutUs4 />
      <Services2 bigTitle grid />
      <Testimonials1 bigTitle />
      <Team2 />
      <Skills2 />
    </LightLayout>
  );
};

export default About;
