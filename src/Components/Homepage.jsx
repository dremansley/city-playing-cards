import CardGrid from "./CardGrid";
import TopSection from "./TopSection.jsx";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact.jsx";
import CardDetails from "./CardDetails.jsx";
import {useState} from "react";

const Homepage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return <>
        <section
            className="relative bg-cover bg-center bg-fixed md:bg-cover sm:bg-contain"
            style={{backgroundImage: `url("./Chester.png")`, backgroundAttachment: "fixed"}}
        >
            <Header/>
            <About/>
        </section>
        <CardGrid openModal={openModal}/>

        <Contact/>
        <CardDetails isOpen={isOpen} onClose={closeModal}/>

    </>
}
export default Homepage
