
import React from 'react';
import checkout from './checkout.png'
import NavbarComponent from '../csscomponents/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import watch from '../watch.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
function Checkout() {
    const history = useHistory();
    const user = localStorage.getItem('username');
    const placeOrder = () => {
        alert( user + ""+"Thanks for shopping with us  -:)");
        let path = "/dashboard";
        history.push(path);
    }

    return (
        <div>
            <NavbarComponent />

            <Container>
                <Row>
                    <Col className="col-4">
                        Shoping Cart
                        <>
                            <Card>
                                <Card.Img className="img-checkou" variant="top" src={watch} />
                                <Card.Body>
                                    <Card.Text>
                                        Analog Watch &nbsp; <p className="font-color-blue" >Qty : 1</p>  $100

                                 </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                        SubTotal     $100 <br />
                                       shipping      Free <br />

                                       Total        $100<br />

                                        <a href="/" > Have Promo Code</a>
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </>
                    </Col>
                    <Col className="col-8">
                        Check Out

                        
                        <Form autoComplete="off">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label >Enter Ur Email address furuthur comminication</Form.Label>

                            <Form.Control type="email"
                             placeholder="Email Address" />

                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                     <Form.Label>Address</Form.Label>
                     <Form.Control as="textarea" rows={3} />
                         </Form.Group>
                         <Form.Group controlId="formBasicCheckbox">
                         <Form.Check type="checkbox" label="I Agree with  terms and conditions" />
                        </Form.Group>
                        </Form>
                   
                        <h4>Payment Method</h4>
                       HDFC : <a href ="https://netbanking.hdfcbank.com/netbanking/?_ga=2.229751644.157963825.1620804811-1901599093.1620804811"
                       target="_blank" rel="noopener noreferrer">click here</a> <br/>
                       SBI :<a href ="https://retail.onlinesbi.com/retail/login.htm"
                       target="_blank" rel="noopener noreferrer">click here</a><br/>


                       <Form.Check type="radio" label="Cash On Delevery(COD)" aria-label="radio 1" />
                        <Button onClick={placeOrder} className="float-right checkout-button" variant="dark" size="sm">Place Order</Button>
                    </Col>
                    <Col>&nbsp;</Col>
                </Row>
            </Container>
        </div>
    )
}
export default Checkout;