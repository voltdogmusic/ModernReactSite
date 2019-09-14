import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import mashroom6 from '../../img/mashroom6.jpeg'
import girlOnMac from '../../img/girlOnMac.jpeg'
import circularDesk from '../../img/circularOfficeDeskHappy.jpeg'
import PropTypes from 'prop-types';

//
// The solution to the carousel image sizing was to set width and height as attributes in the image and
// to set .carousel to a fixed dimension equal to your images, with an additional media query using max-width 900px and having the w/h be auto there, also setting the margins to auto as well, this soln didn't work for iphone 678

//use the prop activeIndex=0 to stop the animation, this was found thru using the React dev tools and seeing that activeIndex increments

class CarouselRBS extends Component {
    render() {
        return (
            <div>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                src={girlOnMac}
                                alt="Grow Baby!!!"
                                className='carouselImg'
                            />
                            <Carousel.Caption>
                                <h1 className="topCarouselLine"> Scalable Solutions</h1>
                                <h3 className="botCarouselLine">Services that grow with you</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={mashroom6}
                                alt="Grow Baby!!!"
                                className='carouselImg'
                            />

                            <Carousel.Caption>
                                <h1 className="topCarouselLine">Got a question?</h1>
                                <h3 className="botCarouselLine">We have the answers!</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={circularDesk}
                                alt="Grow Baby!!!"
                                className = 'carouselImg'
                            />

                            <Carousel.Caption>
                                <h1 className="topCarouselLine">New discoveries</h1>
                                <h3 className="botCarouselLine">With new paths ahead</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

CarouselRBS.propTypes = {

    // autoPlay: PropTypes.bool

};

export default CarouselRBS;
