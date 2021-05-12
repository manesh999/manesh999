import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from "react-router-dom";
import estore from '../estore.jpg'
import bgimage from '../loginbg.jpg'

function Logincomponent(props) {
    const [name, setName] = useState({ username: '', password: '' })
    const history = useHistory();

    const submit = () => {
        if (name.username === '') {
            alert("enter user Name");
            return;
        }
        if (name.password === '') {
            alert("enter password");
            return;
        }
        localStorage.setItem('username', name.username);
        let path = "/dashboard";
        history.push(path);
    }

    return (
        <div style={{ backgroundImage: "url(" + bgimage + ")" }} className="h-100">


            <Container>
                <Row >
                    <Col className="col-3"> &nbsp;</Col>
                    <Col className="col-6">
                        <div className="body-height">
                            <Form autoComplete="off">
                                <div className="imgcontainer">

                                    <img src={estore} alt="Avatar" className="avatar" />
                                </div>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="text"
                                        value={name.username}
                                        onChange={e => setName({ ...name, username: e.target.value })}
                                        placeholder="UserName" />

                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">

                                    <Form.Control type="password"
                                        value={name.password}
                                        onChange={e => setName({ ...name, password: e.target.value })}
                                        placeholder="Password" />
                                </Form.Group>

                                <Button className="ml" variant="outline-primary"
                                    onClick={submit}
                                    type="submit">

                                    Submit
                       </Button>
                            </Form>
                        </div>


                    </Col>
                    <Col className="col-3">&nbsp;</Col>
                </Row>
            </Container >
        </div>


    )

}
export default Logincomponent