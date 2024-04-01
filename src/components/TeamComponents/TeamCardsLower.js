import React from "react";
import { About, Description } from "../../styles";
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";

import { scrollReveal } from "../../animation";
import { useScroll } from "../useScroll";

const WorksCardsLower = () => {
  const [element, controls] = useScroll();

  return (
    <StyledWorksCards
    variants={scrollReveal}
    animate={controls}
    initial="hidden"
    ref={element}
    >
      <WorksCardsDescription>
        <OurWorksCard />
        <OurWorksCard />        
      </WorksCardsDescription>    
    </StyledWorksCards>
  );
};

const OurWorksCard = () => {
  return (
    <motion.div className="uncompleted">
      <div className="inner"></div>
      <div className="inner"></div>
    </motion.div>
  )
}

//Styped components
const StyledWorksCards = styled(About)`
  justify-content: center;
  flex-direction: column;
  background: #000; 
  min-height: 100vh;
  margin-top: 1rem;
`;


const WorksCardsDescription = styled(Description)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 2rem;
  width: 100%;

  .uncompleted{  
    display: flex;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;

    .inner{
      flex: 1;
      height: 20rem;
      background: #0B0B0B;
      border-radius: .2rem;
    }
  }
 

  h2 {
    color: #fff;
    text-align: center;
    font-family: 'Baloo 2', cursive;
    font-size: 3.45455rem;
    font-style: normal;
    font-weight: 600;
    line-height: 123.2%; /* 6.72rem */ 
  }
  h4 {
    color:  #d9d9d9;
    font-family: 'Baloo 2', cursive;
    font-size: 2.23636rem;
    font-style: normal;
    font-weight: 400;
    line-height: 123.2%; /* 4.48rem */
  }
  p {
    width: 70%;
    height: 6.09091rem;
    flex-shrink: 0;
    margin: 0 auto;

    color: #949494;
    text-align: center;
    font-family: 'Baloo 2', cursive;
    font-size: 1.16364rem; 
    font-style: normal;
    font-weight: 400;
    line-height: 123.2%; /* 2.912rem */ 
  }
`;

export default WorksCardsLower;