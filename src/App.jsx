import Test from "./test";
import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";




const App =()=>{
  return (
    <div>
    <Cursor/>
         <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
       <section id="About me">
        <Parallax type="About me" />
      </section>
       {/* <section id="Portfolio">
        <Parallax type="portfolio" />
      </section> */}
       <Portfolio id="portfolio" type="Projects"/>
       <section id="More about me">
        <Projects type="More about me"/>
      </section>
      <section id="Contact">
       <Contact type="Contact"/>
       </section>
    {/* <Test/> */}  
    </div>
    );
};

export default App;