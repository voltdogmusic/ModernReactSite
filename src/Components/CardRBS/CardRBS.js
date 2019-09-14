import React, {Component} from 'react';
import {Card, CardDeck, Button} from "react-bootstrap";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import fistBumpOffice from '../../img/fistbumpoffice.jpeg'
import fistBumpOffice1 from '../../img/laughDesk.jpeg'
import fistBumpOffice2 from '../../img/meeting.jpeg'


// cards are 296x160

const placement = 'top';

class CardRBS extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top"  src={fistBumpOffice} />
                        <Card.Body>
                            <Card.Title className = "cardText" >Pound It!</Card.Title>
                            <Card.Text className = "cardText">
                                Take your team to the next level and check out our collaborative software solutions!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>

                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Learn more about our collaboration software! (Coming Soon!)
                                    </Tooltip>
                                }
                            >
                                <Button className="hvr-bounce-to-bottom" id = "learnMoreButton" color="muted">Learn More</Button>

                            </OverlayTrigger>



                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top"  src={fistBumpOffice1} />
                        <Card.Body>
                            <Card.Title className = "cardText" >Make Development a Breeze!</Card.Title>
                            <Card.Text className = "cardText">
                                Our technologies allow you to focus on creating and innovating without all the mess!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>



                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Learn more about our workflow enhancements! (Coming Soon!)
                                    </Tooltip>
                                }
                            >
                                <Button className="hvr-bounce-to-bottom" id = "learnMoreButton" color="muted">Learn More</Button>

                            </OverlayTrigger>




                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top"  src={fistBumpOffice2} />
                        <Card.Body>
                            <Card.Title className = "cardText" >Be ready to impress!</Card.Title>
                            <Card.Text className = "cardText" >
                           We include integrated data analytics with our software, allowing you to easily share and monitor your progress.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>

                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Learn more about our progress trackers! (Coming Soon!)
                                    </Tooltip>
                                }
                            >
                                <Button className="hvr-bounce-to-bottom" id = "learnMoreButton" color="muted">Learn More</Button>

                            </OverlayTrigger>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        );
    }
}

CardRBS.propTypes = {};

export default CardRBS;
