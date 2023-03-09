import React, {Component} from 'react';
import {Jumbotron, Button} from "reactstrap";
import fistRaise from '../../img/fistRaise.jpeg'
import brand from '../../img/BrandNoBG.png'
import {OverlayTrigger, Tooltip} from "react-bootstrap";


const placement = 'right';

class JumbotronRBS extends Component {
    render() {
        return (
            <div>
                <Jumbotron className='jumbotronMediaQ' style={{padding: '3rem 0rem'}}>
                    <div className='jumboMainText'>
                        <h1 className='lets'>Let's do this!</h1>
                        <div style={{marginTop: '30px'}}>
                            <p className="lead" style={{fontSize: '2rem'}}>You lead the way and we'll be right
                                <span className='behind'> behind </span> you! </p>
                            <hr/>
                            <p><b>Discover</b> your future with us and create new <b>value</b> for
                                your business.</p>
                            <p>

                                <OverlayTrigger
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Tooltip id={`tooltip-${placement}`}>
                                            Are you ready? Let's<strong> do </strong>this! (Coming Soon!)
                                        </Tooltip>
                                    }
                                >
                                    <Button className="hvr-shutter-in-vertical" id="jumboLearnMoreButton" color="dark"
                                            style={{marginLeft: '1rem'}}> Learn
                                        More</Button>
                                </OverlayTrigger>


                            </p>
                        </div>
                    </div>
                    <img
                        src={fistRaise}
                        alt="Power up!!!"
                        className='jumboImage'
                        style={{
                            webkitBoxShadow: '5px 5px 15px 5px #000000',
                            boxShadow: '5px 5px 15px 5px #000000',
                            marginLeft: '2rem',
                            objectFit: 'cover',
                            width: '50%',
                            height: '50%'
                        }}
                    />
                </Jumbotron>
            </div>
        );
    }
}

JumbotronRBS.propTypes = {};

export default JumbotronRBS;

