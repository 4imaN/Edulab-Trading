import { Contact } from "lucide-react";
import Nav from "../components/Nav.tsx";
import useInitialLoad from "../hooks/useInitialLoad";
import Clients from "./clients/Clients";
import Hero from "./Hero/Hero.tsx";
import Home from "./Home/Home.tsx";
import Services from "./services/Services.tsx";
import Team from "./team/Team.tsx";
import Contacts from "./contacts/Contacts.tsx";
const View = () => {
    const { initialLoad } = useInitialLoad();
    return (
        <div>
            {initialLoad ? (
                <Hero />
            ) : (
                <div>
                    <Nav />
                    <Home />    
                    <Services />    
                    
                    
                    < Contacts />
                </div>
            )}
        </div>
    );
};

export default View;
