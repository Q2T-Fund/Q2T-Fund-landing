import { lazy } from "react";

import ContactContent from "../../content/ContactContent.json";

import Intro from "../../components/Intro"
import Donors from "../../components/Donors"
import Projects from "../../components/Projects"
import Built from "../../components/Built"
import Detail from "../../components/Detail"
import Values from "../../components/Values"

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <Intro
        type="right"
        first="true"
        icon="intro.png"
        id="intro"
      />
      <Donors
        icon="donors.png"
        id="donors"
      />
      <Projects
        icon="projects.png"
        id="projects"
      />
      <Built
        type="right"
        icon="bird.svg"
        id="built"
      />

      <Detail
        icon="about.png"
        id="in-detail"
      />
      <Values
      id="values"
      />
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
