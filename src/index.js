import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBarRBS from "./Components/NavBarRBS/NavBarRBS";
import CarouselRBS from "./Components/CarouselRBS/CarouselRBS";
import JumbotronRBS from "./Components/Jumbotron/JumbtronRS";
import CardRBS from "./Components/CardRBS/CardRBS";
import SignInForm from "./Components/SignInForm/SignInForm";



setTimeout(function(){

    ReactDOM.render(<NavBarRBS/>, document.getElementById('navbar'));
    ReactDOM.render(<CarouselRBS/>, document.getElementById('modal'));
    ReactDOM.render(<JumbotronRBS/>, document.getElementById('jumbotron'));
    ReactDOM.render(<CardRBS/>, document.getElementById('card'));
    ReactDOM.render(<SignInForm/>, document.getElementById('email'));
}, 3000);





