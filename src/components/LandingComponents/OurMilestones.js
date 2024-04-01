import React from "react";
//Import Icons

import { motion } from "framer-motion";
//Styles
import { Description } from "../../styles";
import styled from "styled-components";
import { scrollReveal } from "../../animation";
import { useScroll } from "../useScroll";

const OurMilestones = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledOurMilestones>
        <h2>Our Milestones</h2>
        <Cards>
          <Card>
            <h3>8</h3>
            <p>Happy Clients</p>
          </Card>
          <Card>
            <h3>100+</h3>
            <p>Projects Completed</p>
          </Card>
          <Card>
            <h3>10</h3>
            <p>Jobs Created</p>
          </Card>
          <Card>
            <h3>2</h3>
            <p>Trainings Done</p>
          </Card>
          <Card>
            <h3>1000+</h3>
            <p>Cups of Coffee</p>
          </Card>
        </Cards>
      </StyledOurMilestones>
    </Services>
  );
};

const Services = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  color: white;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
  h2 {
    font-size: 2.7rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    padding:0rem;
    margin-top: .3rem;
    mmin-height: 25vh;
    
    h2 {
      font-size: 2.5rem;
      padding: 1rem 0 1rem 0;
      white-space: nowrap;
    }
  }
`;

const StyledOurMilestones = styled(Description)`
  height: 100%;
  background: #000;
  width: 100%;
  padding: 5rem 3rem 5rem 0rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 5rem;

  @media (max-width: 768px) {
    padding: 2rem 0;
    row-gap: 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const Card = styled.div`
  position: relative;
  text-align: center;
  flex: 1 0 22rem;

  h3 {
    color: white;
    font-size: 4.5rem;
    font-weight: 800;
  }
  p {
    color: #ccc;
    font-size: 1rem;
    line-height: 150%;
    width: 5rem;
    margin: 1rem auto;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex: 0 0 9rem;
    h3{
      font-size: 3rem;
    }
    p{
      margin: 0 auto;
    }
  }
`;

export default OurMilestones;
