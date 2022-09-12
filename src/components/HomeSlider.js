import React  from 'react';
import { Container, Image } from 'react-bootstrap';
import logo from "../source/icon-1.png";
import blink1 from "../source/blink1.png";
import blink2 from "../source/blink2.png";
import blink3 from "../source/blink3.png";
import blink4 from "../source/blink4.png";
import blink5 from "../source/blink5.png";
import blink6 from "../source/blink6.png";

function HomeSlider() {

  return (
    <div className='home' id="dashboard">
      <Container>
        <a href="#dashboard">
          <Image src={logo} width="90px" alt="logo" className='rounded-circle logo-img mt-3' />
        </a>
      </Container>
      <a href='#dashboard' className='go-top'><i className='fa fa-arrow-up fa-1x'></i></a>
      <div className='item1'>
        <a href='#services'>
          <Image src={blink1} className="card1" /> 
        </a>
      </div>
      <div className='item2'>
        <a href='#about'>
          <Image src={blink2} className="card1" /> 
        </a>
      </div>
      <div className='item3'>
        <a href='#teams'>
          <Image src={blink3} className="card1" /> 
        </a>
      </div>
      <div className='item4'>
        <a href='#product'>
          <Image src={blink4} className="card1" />  
        </a> 
      </div>
      <div className='item5'>
        <a href='#contact'>
          <Image src={blink5} className="card1" /> 
        </a>
      </div>
      <div className='item6'>
        <a href='#content'>
          <Image src={blink6} className="card1" /> 
        </a>
      </div>
    </div>
    
  );
}

export default HomeSlider;