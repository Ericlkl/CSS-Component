import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    border-radius: 1rem;
    margin: 0.5rem;
    min-width: 300px;
    min-height: 300px;
    border: 1px solid black;
  
    &:hover {
      border: 1px solid red;
      .event-card__content_title{
        color:red;
      }
    }
`;

const CardImage = styled.img`
    width: 100%;
    border-radius: 1rem;
`;

const CardContent = styled.div`
    margin: 1rem 0.5rem;
`;

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid black;
    >*{
    margin: 0.5rem;
    }
`;

class EventCard extends Component {
  render() {
    return (
        <Wrapper>
            <CardImage src="https://img3.goodfon.com/wallpaper/nbig/b/ca/rabota-stol-delat-apple.jpg" 
                alt="event-img"/>
            
            <CardContent>
                <h1 class="event-card__content_title">Title</h1>
                <h3 class="event-card__content_location">location</h3>
                <h3 class="event-card__content_date">date</h3>
                <p class="event-card__content_description">Learn IOS & Andriod and more...</p>
            </CardContent>
            
            <CardFooter>
                <p class="event-card__footer_host">Host By</p>
                <p class="event-card__footer_city">Brisbane</p>
            </CardFooter>
            
        </Wrapper>
    )
  }
}

export default EventCard;