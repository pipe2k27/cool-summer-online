import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap';
import './styles.css';

const Contacto = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const mailCoolSummer = "email@coolsummer.com"

    return (
        <div className='contactoContainer'>
            <div className='contactoOverlay'>
                <div className='contactTitle'>
                    <h1>CONTACTANOS</h1>
                    <h4>Completá el siguiente formulario y dejanos tu consulta. <br/>
                    En breve nos pondremos en contacto para asesorarte en lo que necesites.
                    </h4>
                    {/* <h4></h4> */}
                    <img src="/images/logo-no-letters.png" alt="" />
                </div>
                <div className='contactForm'>
                    <Form className='contactForm' noValidate validated={validated} onSubmit={handleSubmit} action={`https://formsubmit.co/${mailCoolSummer}`} method='post'>
                        <Row className="mb-3 inputsContain">
                            <span className='inputsSpan'></span>
                            <Form.Group as={Col} className='inputStyle' md="4" controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="text"
                                    name='nombre'
                                    placeholder="NOMBRE COMPLETO"
                                />
                                <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className='inputStyle' controlId="validationCustom02">
                                <Form.Control
                                    required
                                    type="email"
                                    name='email'
                                    placeholder="E-MAIL"
                                />
                                <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className='inputStyle' controlId="validationCustom03">
                                <Form.Control
                                    required
                                    type="number"
                                    name='telefono'
                                    placeholder="TELÉFONO"
                                />
                                <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                            </Form.Group>
                            <InputGroup className='inputStyle'>

                                <Form.Control as="textarea" aria-label="With textarea" name='consulta' placeholder='CONSULTA' />
                            </InputGroup>
                            <Button className='inputStyle' type="submit">ENVIAR</Button>
                            <Form.Group>
                                <Form.Control
                                    type="hidden"
                                    name='_next'
                                    value="http://localhost:3000/contacto"
                                />
                                <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group >
                                <Form.Control
                                    type="hidden"
                                    name='_captcha'
                                    value="false"
                                />
                                <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                            </Form.Group>
                            
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Contacto