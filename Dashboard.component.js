import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import watch from '../watch.png'
import { Link } from 'react-router-dom';
import headphone from '../headphone.jfif'
import NavbarComponent from '../csscomponents/Navbar';
import image from '../image.jfif';
import image2 from '../image2.jfif';
import image3 from '../image3.jfif';
import image4 from '../image4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";



function Dashboard() {
    const [products, setProducts] = useState([])
    const history = useHistory();

    const routeChange = () => {
        if (products.length === 0) {
            alert("select an item to checkout");
            return;
        }
        let path = "/checkout";
        history.push(path);
    }

    const selectedProduct = props => {

        setProducts([...products, {
            id: products.length,
            name: props.name
        }])
    }

    return <div>
        <NavbarComponent />
        <div className="body-height">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <img onClick={event => selectedProduct({ name: 'watch' })} src={watch} />
                    </Col>
                    <Col xs={6} md={4}>
                        <img onClick={event => selectedProduct({ name: 'headphone' })} className="product-img" src={headphone} />


                    </Col>
                    <Col xs={6} md={4}>
                        <img onClick={event => selectedProduct({ name: 'earbuds' })} className="product-img" src={image} />
                    </Col>
                    <Col xs={6} md={4}>
                        <img onClick={event => selectedProduct({ name: 'hp' })} className="product-img" src={image2} />
                    </Col>

                    <Col xs={6} md={4}>
                        <img onClick={event => selectedProduct({ name: 'lenovo' })} className="product-img" src={image3} />
                    </Col>
                    <Col xs={6} md={4}>
                        <img onClick={event => selectedProduct({ name: 'masks' })} className="product-img" src={image4} />
                    </Col>

                </Row>
            </Container>
        </div>

        <Button onClick={routeChange}
            variant="outline-primary"
            size="sm"
            className="float-right checkout-button">
            Proceed to checkout</Button>
        <div className="float-right checkout-button">
            <FontAwesomeIcon icon={faCartPlus} size="xs" />
            <small>:{products.length}</small>
        </div>

        {/* <iframe src="https://www.youtube.com/embed/cWDJoK8zw58" />; */}
    </div>
}
export default Dashboard