import React, { Component } from "react";
import Slider from "react-slick";
import Nav from '../contents/Nav';
import Footer from '../contents/Footer';

import { useState } from 'react';
import { debounce } from 'lodash';
import { useEffect } from 'react';

import Pj1 from '../contents/PJ1';
import Pj2 from '../contents/PJ2';
import Pj3 from '../contents/PJ3';




function Pj(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    
    };
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = debounce(() => {
        setWidth(window.innerWidth);
    }, 100);
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };  
    }, []);
    return(
        <div>
            <Nav />
            <div className='PJ contents '>
                {width>800?
                <Slider {...settings}>
                    <Pj1 />
                    <Pj3 />
                    <Pj2 />
                </Slider>:
                <div>
                    <Pj1 />
                    <hr></hr>
                    <Pj3 />
                    <hr></hr>
                    <Pj2 />
                </div>
                }
            </div>
            
            <Footer />
        </div>
    );
}

export default Pj;