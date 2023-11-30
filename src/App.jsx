import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
// import Blogs from "./components/blogs/Blogs";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <Projects />
            {/* <Blogs /> */}
            <About />
            <Experience />
            <Footer />
        </>
    );
};

export default App;
