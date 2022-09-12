import React from "react";
import { Image, Card, Row, Col, Figure } from "react-bootstrap";
import profil1 from "../source/profil-1.jpg";
import profil3 from "../source/profil-2.jpg";
import profil2 from "../source/profil-4.jpg";
import Slider from "react-slick";

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

function Team() {
    
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
    return (
      <div className='bg-light my-5 p-2' id="teams">
        <h4 className="text-center">Our Team</h4>
        <Slider {...settings}>
        <Figure className="snip1113 red">
          <Figure.Image src={profil1} alt="Alwido" />
          <Figure.Caption>
            <h3><span>Alwido</span> Rizky Mulia Pane</h3>
            <h4>Founder</h4>
          </Figure.Caption>
        </Figure>
        <Figure className="snip1113 blue hover">
          <Figure.Image src={profil2} alt="Alwido" />
          <Figure.Caption>
            <h3><span>Rivai</span> Fansuri Nasution</h3>
            <h4>Web Developer</h4>
          </Figure.Caption>
        </Figure>
        <Figure className="snip1113">
          <Figure.Image src={profil3} alt="Alwido" />
          <Figure.Caption>
            <h3>Up<span> Coming</span></h3>
            <h4>Creator</h4>
          </Figure.Caption>
        </Figure>
        </Slider>
      </div>
        
    );
  }
  
export default Team;