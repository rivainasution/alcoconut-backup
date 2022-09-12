import {Row, Col} from "react-bootstrap";

function Services (){
    return(
    <div className="my-5" id="services">
       <h3 className="text-center">Our Services</h3>
        <Row>
            <Col md className="bg-light cards px-4 m-2 py-2">
                <div className="text-center my-2">
                    <i className="fas fa-shield-alt fa-4x"></i>
                </div>
                <h5 className='text-dark text-center'>Integrity</h5>
                <h6 className='text-secondary'>
                Integrity means telling the truth, keeping our word and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.
                </h6>
            </Col>
            <Col md className="bg-light cards px-4 m-2 py-2">
                <div className="text-center my-2">
                    <i className="fas fa-crown fa-4x"></i>
                </div>
                <h5 className='text-dark text-center'>Quality</h5>
                <h6 className='text-secondary'>
                Quality is exhibited in many ways by selling and supporting products and services that delight customers, establishing a work environment , delivering financial results that meet investor expectations.
                </h6>
            </Col>
            <Col md className="bg-light cards px-4 m-2 py-2">
                <div className="text-center my-2">
                    <i className="fas fa-handshake fa-4x"></i>
                </div>
                <h5 className='text-dark text-center'>Commitment</h5>
                <h6 className='text-secondary'>
                Commitment is important where we will continue to provide the best to our customers and investors all the time. Our opportunity to serve should be viewed as a privilege that is not to be taken for granted.
                </h6>
            </Col>
            <Col md className="bg-light cards px-4 m-2 py-2">
                <div className="text-center my-2">
                    <i className="fas fa-lightbulb fa-4x"></i>
                </div>
                <h5 className='text-dark text-center'>Innovation</h5>
                <h6 className='text-secondary'>
                Innovation means inventing, designing, developing products and services that have high appeal in the marketplace and strengthen customer preference for the Universal Coco Indonesia project.
                </h6>
            </Col>
        </Row>
    </div>    
    );
}
export default Services;