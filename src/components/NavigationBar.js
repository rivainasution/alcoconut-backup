import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../source/icon-1.png";

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <img
              alt=""
              src={logo}
              width="54"
              height="54"
              className="d-inline-block align-top rounded-circle"
            />{' '}
              <div className='mx-2 d-flex flex-column'>
                <h5 className='text-light'>Alcoconut</h5>
                <h6 className='text-light'>PT Kharisma Timur Indonesia</h6>
              </div>
              
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;