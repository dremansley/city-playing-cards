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
        <section className="relative bg-cover bg-fixed" style={{ backgroundImage: `url("./chester-3d.png")`, backgroundSize:"cover", backgroundAttachment:"fixed", backgroundPosition:"center" }}>
        <Header/>
        <About/>
        </section>
        <CardGrid openModal={openModal}/>

        <Contact/>
        <CardDetails isOpen={isOpen} onClose={closeModal} />

    </>
}
export default Homepage
