import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const TitleBox = styled.div`
    text-align: center;
`;

const Plans = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 28px;
    text-align: center;
`;

const PlanContent = styled.div`
    width: 100%;
    >ul {
    list-style: none;
    padding:0;
    margin: 40px;
    }
`;

const Plan = () => {
    return (
        <div style={{border: "2px solid grey"}}>
            <div>
                <h6>Intro</h6>
            </div>
            <PlanContent>
                <ul>
                <li>$0 / mo</li>
                <li>10 users include</li>
                <li>2Gb Storage</li>
                <li>Email Support</li>
                </ul>
                <button>Purchase</button>
            </PlanContent>
        </div>
    )
}



class PlanSection extends Component {
  render() {
    return (
        <Wrapper>
            <TitleBox>
                <h1>Price</h1>
                <h3>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</h3>
            </TitleBox>
            
            <Plans>
                <Plan/>
                <Plan/>
                <Plan/>
            </Plans>
        </Wrapper>
    )
  }
}

export default PlanSection;