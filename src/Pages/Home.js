import "../styles.css";
import { NavBar } from "../Components/NavBar";
import { Banner } from "../Components/Banner";
import { Skills } from "../Components/Skills";
import { Projects } from "../Components/Projects";
import { Contact } from "../Components/Contact";
import { Footer } from "../Components/Footer";

export const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
