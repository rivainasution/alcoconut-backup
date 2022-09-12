import {Row, Col, Image, Carousel, Button} from "react-bootstrap";
import image2 from "../source/about-1.jpg";
import image1 from "../source/about-2.jpg";
import image3 from "../source/about-3.jpg";
import image4 from "../source/about-4.jpg";

function About (){
    return(
    <div className="my-5 bg-light p-2" id="about">
       <h3 className="text-center">About Us</h3>
        <Row >
            <Col md className="my-2 mx-2 ">
                <Carousel className="Frame">
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={image1}
                            alt="mandheling coffee"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={image2}
                            alt="mandheling coffee"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={image3}
                            alt="sipirok coffee"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={image4}
                            alt="sipirok coffee"
                        />
                    </Carousel.Item>
                </Carousel>
                
            </Col>
            <Col md className="p-2 m-2">
                <h5 className='text-dark'>PT. Kharisma Timur Indonesia is a new company that was established 
                on December 23, 2021.</h5>
                <h6 className='text-secondary text'>
                This company is engaged in exports, especially exports of processed products from local coffee 
                originating from North Sumatra which are worldwide, namely Mandheling coffee and Sipirok coffee. 
                Our company has distributed processed coffee products to various countries and has been used in 
                various coffee shops throughout Indonesia. 
                <br /><br />
                We prioritize natural quality with traditional processing to maintain its taste. Now, we produce 
                processed coffee products with a quantity of 100 kg/week and we continue to 
                strive to increase our production base without compromising on quality with the hope that these 
                mandheling and sipirok coffee products can be enjoyed by all coffee lovers around the world.
                
                </h6>                
                <Button variant="primary">More Details</Button>
            </Col>
        </Row>
    </div>
    );
}
export default About;