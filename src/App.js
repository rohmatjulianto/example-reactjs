import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import {Button, Row, Col,CardDeck, Card, Form, Container, Nav, Navbar} from 'react-bootstrap';
import { Link, Element } from 'react-scroll';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft,} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import 'react-alice-carousel/lib/alice-carousel.css';
import 'bootstrap/dist/css/bootstrap.css';  
import './App.css';

import Wifi from'./logo-feature/wifi-router.svg';
import Apar from'./logo-feature/fire-extinguisher.svg';
import Fridge from'./logo-feature/fridge.svg';
import Microwave from'./logo-feature/microwave.svg';
import Toilet from'./logo-feature/toilet.svg';

class App extends Component {
  state = {
    feature : [],
    responsive_carousel : {
      0: { items: 1 },
      600: { items: 2 },
      960: { items: 3 }
    },
    stagePadding: {
      paddingLeft: 0,
      paddingRight: 40,
    }
  };

 
  componentDidMount(){
    this.setState({
      feature: [
        {name : "Name", image: Wifi, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
        {name : "Name", image: Apar, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
        {name : "Name", image: Fridge, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
        {name : "Name", image: Microwave, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
        {name : "Name", image: Toilet, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <div className="App-nav">
        <Container>
              <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="#home">React Web</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#product">
                      <Link activeClass="active" to="product" spy={true} smooth={true} offset={10} duration={500}>
                        Product
                      </Link>
                    </Nav.Link>
                    <Nav.Link href="#features">
                    <Link activeClass="active" to="features" spy={true} smooth={true} offset={10} duration={500}>
                        Features
                      </Link>
                    </Nav.Link>
                    <Nav.Link href="#client">
                    <Link activeClass="active" to="client" spy={true} smooth={true} offset={10} duration={500}>
                        Client
                      </Link>
                    </Nav.Link>
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </div>

        <div className="App-header">
          <Container>
            <Row className="App-center">
              <Col lg={6} className="mb-4">
              <h1>Hello World</h1>
                <p className="txt-content">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </p>
                <Button variant="primary lg">Getting Started</Button>
              </Col>
              <Col lg={5} className="ml-auto">
                <div className="form-box mb-4">
                  <Form>
                  <label className="label-sign">Sign Up</label>
                  <Form.Group>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="password" placeholder="Re-type Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">Submit</Button>
                  </Form>
                </div> 
              </Col>
            </Row>
          </Container>
        </div>

        <Element name="product">
          <Container>
            <div className="product-box">
              <div className="product-label">
                Our Product
              </div>
              <CardDeck>
                <Card>
                  <div className="example-image">Image</div>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
                        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min
                        im veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </Card.Text>
                  </Card.Body>  
                </Card>
                <Card>
                  <div className="example-image">Image</div>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
                        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min
                        im veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </Card.Text>
                  </Card.Body>  
                </Card>
                <Card>
                  <div className="example-image">Image</div>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
                        ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min
                        im veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </Card.Text>
                  </Card.Body>  
                </Card>
              </CardDeck>
            </div>
          </Container>
        </Element>

    <Element name="features">
        <div className="feature-box">
          <Container>
            <div className="product-label"> Our Feature</div>
            <Row> 
            {
              this.state.feature.map((feature, i) => {
                return (
                  <Col md={4}>
                    <div className="feature-content d-flex">
                      <img className="img-feature" src={feature.image} alt={i}/>
                      <div>
                        <h4>{feature.name}</h4>
                        <p>{feature.title}</p>
                      </div>
                    </div>
                  </Col>
                );
              })
            }
            </Row>
          </Container>
        </div>
    </Element>

      <Element name="client">
          <Container>
            <div className="product-label">Our Client</div>
            <div className="frame-slide">
                <AliceCarousel
                  mouseDragEnabled
                  stagePadding={this.state.stagePadding}
                  autoPlayInterval={3000}
                  autoPlay={true}
                  responsive = {this.state.responsive_carousel}
                  ref={(el) => (this.Carousel = el)}
                  buttonsDisabled={true}
                  items={
                    this.state.feature.map((feature,i) => (
                      <Card>
                        <Card.Body>
                          <Card.Title>{feature.name}</Card.Title>
                          <Card.Text>{feature.title}</Card.Text>
                        </Card.Body>
                      </Card>
                      ))
                  }
                />
                <div className="cont-btn">
                    <button className="btn icon-only" onClick={() => this.Carousel.slidePrev()}>  <FontAwesomeIcon icon={faChevronLeft} /> <p>Previous</p> </button>
                    <button className="btn icon-only " onClick={() => this.Carousel.slideNext()}>  <FontAwesomeIcon icon={faChevronRight} /> <p>Next</p> </button>
                </div>
            </div>
          </Container>
     </Element>

          <div className="App-footer">
            <Container>
              <Row>
                <Col md={4}>
                  <h4>About</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </Col>
                <Col md={4} className="follow">
                  <h4>Follow Us</h4>
                  <a href="/facebook" className="social"><FontAwesomeIcon icon={faFacebook}/></a>
                  <a href="/instagram" className="social"><FontAwesomeIcon icon={faInstagram}/></a>
                  <a href="/twitter" className="social"><FontAwesomeIcon icon={faTwitter}/></a>
                </Col>
                <Col md={4}>
                  <h4>TERMS & POLICIES</h4>
                 <p><a href="/#">Terms of Use</a></p>
                 <p><a href="/#">Code of Conduct</a></p>
                 <p><a href="/#">Privacy Policy</a></p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
    );
  }
}

export default App;
