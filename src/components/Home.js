import { Container } from "react-bootstrap";
import About from "./About";
import HomeSlider from "./HomeSlider";
import NavigationBar from "./NavigationBar";
import Content from "./Content";
import Services from "./Services";
import Product from "./Product";
import Team from "./Team";
import Contact from "./Contact";
import Footers from "./Footer";

function Home(){
    return(
        <div>
            {/* <NavigationBar /> */}
            <HomeSlider />
            <Container>
                <Services />
                <About />
                <Content />
                <Product />
                <Team />
                <Contact />
            </Container>
            <Footers />
        </div>
    );
}

export default Home;