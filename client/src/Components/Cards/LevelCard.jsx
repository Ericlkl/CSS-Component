import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    @keyframes zoom {
        from {transform: scale(1, 1) }
        to {transform: scale(1.1, 1.1)}
    }

    margin: 5rem;
    border: 1px solid black;
    width: 500px;
    height: 12rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    background: url("https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png") center center/cover;

    -webkit-box-shadow: 4px 2px 36px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 2px 36px 2px rgba(0,0,0,0.75);
    box-shadow: 4px 2px 36px 2px rgba(0,0,0,0.75);

    &:hover{
        animation-name: zoom;
        animation-duration: .5s;
        transform: scale(1.1, 1.1);
    }
`;

const Level = styled.p`
    margin: 1rem;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem;
`;

const Logo = styled.img`
    width: 3.5rem;
    height: 3.5rem; 
`;

const TitleBox = styled.div`
    align-self: flex-end;
`;

class LevelCard extends Component {
  render() {
    return (
        <Wrapper>
            <Level>Level1</Level>
            <Content>
                <TitleBox>
                    <h3>React Hook for everyone</h3>
                    <p>22 videos</p>
                </TitleBox>

                <Logo src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="logo"/>
            </Content>
        </Wrapper>
    )
  }
}

export default LevelCard;