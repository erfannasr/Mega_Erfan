import React from 'react';
import { ServicesCart, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServisesWrapper } from './ServicesElements';

import Icon1 from '../../images/undraw_next_js_-8-g5m (1).svg'
import Icon2 from '../../images/undraw_react_re_g3ui.svg'
import Icon3 from '../../images/undraw_next_js_-8-g5m (1).svg'
const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Courses Features</ServicesH1>
            <ServisesWrapper>
                <ServicesCart>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Project Oriented</ServicesH2>
                    <ServicesP>Use Many fro learning better</ServicesP>
                </ServicesCart>

                <ServicesCart>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Free Courses</ServicesH2>
                    <ServicesP>Free courses for learning free without stress to</ServicesP>
                </ServicesCart>

                <ServicesCart>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>VIP Account</ServicesH2>
                    <ServicesP>Access All Cousess With Paying 10$ per month</ServicesP>
                </ServicesCart>
            </ServisesWrapper>
        </ServicesContainer>
    );
};

export default Services;