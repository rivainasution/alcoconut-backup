import { Button, Col, Image, ListGroup, Row, Table } from "react-bootstrap";
import image2 from "../source/about-1.jpg";
import image1 from "../source/about-2.jpg";
import image3 from "../source/about-3.jpg";
import image4 from "../source/about-4.jpg";
import Iframe from "react-iframe";


function Contact () {
    return(
        <div className="my-5 bg-light p-2" id="contact">
            <h4 className='text-center'>Contact Us</h4>
            <Row>
                <Col md>
                    <ListGroup className="mx-2">
                        <ListGroup.Item>
                            <Row>
                                <Col lg={2}>
                                    <Button variant="outline-primary mx-2" size="lg">
                                        <a className="fas fa-location-dot fa-lg"></a>
                                    </Button>
                                </Col>
                                <Col lg={10}>
                                    <div className="d-flex flex-column">
                                        <span className="text-dark">Our Office</span>
                                        <span className="text-secondary">Maluku, Indonesia</span>
                                    </div>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col lg={2}>
                                    <Button variant="outline-primary mx-2" size="lg">
                                        <a className="fa fa-phone fa-md"></a>
                                    </Button>
                                </Col>
                                <Col lg={10}>
                                    <div className="d-flex flex-column">
                                        <span className="text-dark">Contact Us</span>
                                        <span className="text-secondary">+62 822 7434 8350</span>
                                    </div>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col lg={2}>
                                    <Button variant="outline-primary mx-2" size="lg">
                                        <a className="fa fa-envelope-open fa-md"></a>
                                    </Button>
                                </Col>
                                <Col lg={10}>
                                    <div className="d-flex flex-column">
                                        <span className="text-dark">Mail Us</span>
                                        <span className="text-secondary">customer.service@alcoconut.com</span>
                                    </div>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col lg={2}>
                                    <Button variant="outline-primary mx-2" size="lg">
                                        <a className="fab fa-instagram fa-lg"></a>
                                    </Button>
                                </Col>
                                <Col lg={10}>
                                    <div className="d-flex flex-column">
                                        <span className="text-dark">Instagram</span>
                                        <span className="text-secondary">@alcoconut_official</span>
                                    </div>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md>
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.480503372128!2d128.15593401448197!3d-3.7047841440896074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d6ce81324cee2b1%3A0xe5c9ac2d3bf1cf58!2sJl.%20Dr.%20Malaihollo%2C%20Kel%20Benteng%2C%20Kec.%20Nusaniwe%2C%20Kota%20Ambon%2C%20Maluku!5e0!3m2!1sid!2sid!4v1662992541946!5m2!1sid!2sid" 
                    width="400" 
                    height="300" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">

                </Iframe>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;