import Hero from "./sections/Hero/Hero"
import NavBar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Hobbies from "./sections/Hobbies/Hobbies";
import Education from "./sections/Education/Education";
import Project from "./sections/Project/Project";
import Footer from "../../components/Footer/Footer";

const Home = () => {

  return (
    <>
    <NavBar />
    <Hero/>
    <About />
    <Hobbies />
    <Education />
    <Project />
    <Footer />
    </> 
  )
}

export default Home
