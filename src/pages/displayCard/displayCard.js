import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const DisplayCard = (props) => {
    return (<>
        <Container>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header><b>Your Returns</b></Card.Header>
                        <Card.Body>
                            <Card.Title>{props.totalAmount !== 0 ? <span>After <b>{props.time}</b> years, your investment of <b>₹ {props.invested}  lakhs</b> will grow to
                                <span className="text-success">₹ {props.totalAmount} lakhs*</span> @ {props.rate}% p.a.</span> : ''}</Card.Title>

                            <Card.Title>{props.totalAmount !== 0 ? <span  className="text-success">₹ {props.totalAmount}</span> : ''}</Card.Title>
                            <Card.Text>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    </>);
}

export default DisplayCard;