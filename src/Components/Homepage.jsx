import CardGrid from "./CardGrid";
import Header from "./Header";
import TopSection from "./TopSection.jsx";
import Contact from "./Contact.jsx";
import CardDetails from "./CardDetails.jsx";
import {useState} from "react";

const Homepage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return <>

            <TopSection/>
        <CardGrid openModal={openModal}/>

        <Contact/>
        <CardDetails isOpen={isOpen} onClose={closeModal}/>

    </>
}
export default Homepage
