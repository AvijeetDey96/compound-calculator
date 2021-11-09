import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../../components/customNavbar/navbar.compoent';
import DisplayCard from '../displayCard/displayCard';

const Home = () => {
    const [amount, setAmount] = useState(50000)
    const [rateOfInterest, setRateOfInterest] = useState(8)
    const [time, setTime] = useState(20);
    const [totalAmount, setTotalAmount] = useState(0);
    const heading = 'COMPOUND INTEREST CALCULATOR';
    const handleChange = (e, type) => {
        switch (type) {
            case 'amount':
                setAmount(e.target.value)
                break;
            case 'time':
                setTime(e.target.value)
                break;
            case 'rate':
                setRateOfInterest(e.target.value)
                break;

            default:
                break;
        }
        
    }

    const calculation = () => {
        // A = P(1+(r/n))^(n*t)
        // A = final amount
        // P = initial principal balance
        // r = interest rate
        // n = number of times interest applied per time period
        // t = number of time periods elapsed
        let  actual = amount * (Math.pow((1 + ((rateOfInterest/100) / 12)), (12 * time))); 
        console.log(amount, rateOfInterest, time);
        // let actual = amount * (Math.pow((1 + (rateOfInterest / 1)), (1 * time)));
        // parseFloat("10.547892").toFixed(2)
        setTotalAmount( parseFloat(actual).toFixed(2))
        // console.log('actual',  parseFloat(actual).toFixed(2));s
    }
    return (<>
        <CustomNavbar />
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="text-center h4">{heading}</div>
                    <br />

                </Col>
                <Col lg={6} >
                    <Row>
                        <Col lg={12} >
                            <div className="text-left text-muted">Amount you want to invest</div>
                            <input type="number" onChange={(e) => handleChange(e, 'amount')} min={0} className="form form-control" value={amount} />
                        </Col>

                        <Col lg={12} >
                            <br />
                            <div className="text-left text-muted">Number of years you want to invest for</div>
                            <input type="number" onChange={(e) => handleChange(e, 'time')} min={0} className="form form-control" value={time} />
                        </Col>

                        <Col lg={12} >
                            <br />
                            <div className="text-left text-muted">You expect the Annual Rate of Returns to be</div>
                            <input type="number" onChange={(e) => handleChange(e, 'rate')} min={0} className="form form-control" value={rateOfInterest} />
                        </Col>
                        <Col lg={12} >
                            <br />
                            <Button variant="danger" onClick={()=>calculation()}>SUBMIT</Button>
                        </Col>
                    </Row>

                </Col>
                <Col lg={6}>
                    <DisplayCard time={time} invested={time*amount} rate={rateOfInterest}  totalAmount={totalAmount}/>
                </Col>


              
            </Row>
            
        </Container>



    </>);
}

export default Home;
