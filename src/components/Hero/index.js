import React, {useState} from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroItems, HeroContent, 
HeroP, HeroBtn, HeroH1} from './HeroElements';
import Sidebar from '../Sidebar';


const Hero = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}

    return (
       <HeroContainer>
         <Navbar toggle={toggle}/>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <HeroContent>
            <HeroItems>
                 <HeroH1>
                     Greatest Pizza
                 </HeroH1>
                 <HeroP>Ready in 60 seconds</HeroP>
                 <HeroBtn>Place Order</HeroBtn>
             </HeroItems>
         </HeroContent>
       </HeroContainer>
    )
}

export default Hero
