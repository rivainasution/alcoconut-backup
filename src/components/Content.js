import {Row, Col, Nav, Tab, Image, Carousel, Button} from 'react-bootstrap';
import mandheling1 from "../source/mandheling-1.jpg";
import mandheling2 from "../source/mandheling-2.jpg";
import mandheling3 from "../source/mandheling-3.jpg";
import mandheling4 from "../source/mandheling-4.jpg";
import sipirok1 from "../source/sipirok-1.jpg";
import sipirok2 from "../source/sipirok-2.jpg";
import sipirok3 from "../source/sipirok-3.jpg";
import sipirok4 from "../source/sipirok-4.jpg";


function LeftTabsExample() {
  return (
    <div className='my-5 bg-light p-2' id="content">
      <h4 className='text-center'>About Product</h4>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Mandheling Coffee</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Sipirok Coffee</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  <Col md className='pb-3'>
                    <p className='text'>Mandheling coffee is Arabica coffee originating from the Mandailing area, Bukit Barisan Mountains, 
                      North Sumatra. This coffee has a good thick taste, medium acidity, floral taste with a sweet finish. 
                      In William H. Ukers' book (New York, 1922), mandailing coffee is described as the finest and most 
                      expensive coffee on the international market. In 1875, Mandailing Coffee was priced at 79 Florin per 
                      Pikul.</p>
                      <Button variant="primary">More Details</Button>
                  </Col>
                  <Col md>
                    <Carousel className='frame'>
                      <Carousel.Item>
                        <Image
                          className="d-block w-100"
                          src={mandheling1}
                          alt="mandheling coffee"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image
                          className="d-block w-100"
                          src={mandheling2}
                          alt="mandheling coffee"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image
                          className="d-block w-100"
                          src={mandheling3}
                          alt="mandheling coffee"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image
                          className="d-block w-100"
                          src={mandheling4}
                          alt="mandheling coffee"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <Row>
                  <Col md className='pb-3'>
                    <p className='text'>Sipirok coffee is coffee that thrives in Sipirok, North Sumatra. The texture is not thick and quite soft. Sipirok Arabica coffee beans are classified as 
                      specialty coffee because they have a unique taste which is a mixture of lemon tea, spices and palm 
                      sugar. The taste value ranges from 81.37 to 84.75. This quality places Sipirok Coffee in the ranks 
                      of specialty coffee and making it loved by coffee lovers around the world.</p>
                      <Button variant="primary">More Details</Button>
                  </Col>
                  <Col md>
                    <Carousel className='frame'>
                      <Carousel.Item>
                        <Image
                          className="d-block w-100"
                          src={sipirok1}
                          alt="sipirok coffee"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image
                          className="d-block w-100"
                          src={sipirok2}
                          alt="sipirok coffee"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image
                          className="d-block w-100"
                          src={sipirok3}
                          alt="sipirok coffee"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <Image
                          className="d-block w-100"
                          src={sipirok4}
                          alt="sipirok coffee"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default LeftTabsExample;