import React, { useState } from "react";
import Slider from "react-slick";
import {Row, Col, Badge, Card, Image, Modal, Carousel} from "react-bootstrap";
import greenbean from "../source/green-bean.jpg";
import greenbean1 from "../source/green-bean-4.jpg";
import roastbean from "../source/roast-bean-1.jpg";
import powder from "../source/powder-1.jpg";
import powder1 from "../source/powder-4.jpg";
import roastbean4 from "../source/roast-bean-4.jpg";
import roastbean5 from "../source/roast-bean-5.jpg";
import roastbean6 from "../source/roast-bean-6.jpg";
import roastbean7 from "../source/roast-bean-7.jpg";
import { Tag } from 'antd';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#467fd0" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#467fd0" }}
      onClick={onClick}
    />
  );
}

function CustomArrows () {
  const [lgShow, setLgShow] = useState(false);

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="my-5 p-2" id="product">
        <h4 className="text-center">Our Product</h4>
        <Slider {...settings}>
          <Card className='wave p-2' onClick={() => setLgShow(true)}>
              <Image
                  className="d-block w-100"
                  src={greenbean}
                  alt="green bean"
                />
              <Card.Header>
                <Badge bg="warning">Mandheling</Badge>
              </Card.Header>
            <Card.Body>
              <Card.Title>Green Bean</Card.Title>
              <Badge bg="primary">Rp. 90.000/kg</Badge>
            </Card.Body>
          </Card>
          <Card className='wave p-2' onClick={() => setLgShow(true)}>
              <Image
                  className="d-block w-100"
                  src={roastbean}
                  alt="green bean"
                />
              <Card.Header>
                <Badge bg="warning">Mandheling</Badge>
              </Card.Header>
            <Card.Body>
              <Card.Title>Roast Bean</Card.Title>
              <Badge bg="primary">Rp. 145.000/kg</Badge>
            </Card.Body>
          </Card>
          <Card className='wave p-2' onClick={() => setLgShow(true)}>
              <Image
                  className="d-block w-100"
                  src={powder}
                  alt="green bean"
                />
              <Card.Header>
                <Badge bg="warning">Mandheling</Badge>
              </Card.Header>
            <Card.Body>
              <Card.Title>Coffee Powder</Card.Title>
              <Badge bg="primary">Rp. 160.000/kg</Badge>
            </Card.Body>
          </Card>
          <Card className='wave p-2' onClick={() => setLgShow(true)}>
              <Image
                  className="d-block w-100"
                  src={greenbean1}
                  alt="green bean"
                />
                <Card.Header>
                  <Badge bg="danger">Sipirok</Badge>
              </Card.Header>
            <Card.Body>
              <Card.Title>Green Bean</Card.Title>
              <Badge bg="primary">Rp. 90.000/kg</Badge>
            </Card.Body>
          </Card>
          <Card className='wave p-2' onClick={() => setLgShow(true)}>
              <Image
                  className="d-block w-100"
                  src={roastbean4}
                  alt="green bean"
                />
              <Card.Header>
                  <Badge bg="danger">Sipirok</Badge>
              </Card.Header>
            <Card.Body>
              <Card.Title>Roast Bean</Card.Title>
              <Badge bg="primary">Rp. 145.000/kg</Badge>
            </Card.Body>
          </Card>
          <Card className='wave p-2' onClick={() => setLgShow(true)}>
              <Image
                  className="d-block w-100"
                  src={powder1}
                  alt="green bean"
                />
              <Card.Header>
                  <Badge bg="danger">Sipirok</Badge>
              </Card.Header>
            <Card.Body>
              <Card.Title>Coffee Powder</Card.Title>
              <Badge bg="primary">Rp. 160.000/kg</Badge>
            </Card.Body>
          </Card>
        </Slider>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
              <Col md className='mb-3'>
                <Carousel className="frame1">
                  <Carousel.Item>
                    <Card.Img
                      className="d-block w-100"
                      src={roastbean4}
                      alt="green bean"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img
                      className="d-block w-100"
                      src={roastbean5}
                      alt="green bean"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img
                      className="d-block w-100"
                      src={roastbean6}
                      alt="green bean"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card.Img
                      className="d-block w-100"
                      src={roastbean7}
                      alt="green bean"
                    />
                  </Carousel.Item> 
                </Carousel>
              </Col>
              <Col md>
                  <Row>
                      <h5>Title Product</h5>
                  </Row>
                  <Row style={{marginBottom: '20px'}}>
                      <Col>
                          <Tag color="success">Mandheling</Tag>
                          <Tag color="processing">Medan</Tag> 
                          <Tag color="error">5 Star</Tag>
                          <Tag color="warning">Rp 85.000/kg</Tag>
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                        <p className="text">
                        Mandheling coffee is Arabica coffee originating from the Mandailing area, 
                        Bukit Barisan Mountains, North Sumatra. This coffee has a good thick taste, medium acidity, 
                        floral taste with a sweet finish. In William H. Ukers' book (New York, 1922), mandailing 
                        coffee is described as the finest and most expensive coffee on the international market. 
                        In 1875, Mandailing Coffee was priced at 79 Florin per Pikul.</p>
                      </Col>
                  </Row>
              </Col>
            </Row>
          </Modal.Body>
      </Modal>
      </div>
    );
  }
export default CustomArrows;