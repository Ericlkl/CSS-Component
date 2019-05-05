import React, { Component } from 'react'
import styled from 'styled-components';

const CourseImg = styled.img`
    width: 300px;
`;

const CourseContent = styled.div`
    width: 100%;
    margin-left: 0.5rem;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CourseContentFooter = styled.div`
    display: flex;
    justify-content: space-between;
`;

// Delete the width when it is need
const Wrapper = styled.div`

    width: 700px;

    display: flex;
    margin: 1rem;
    padding: 0.5rem;
    min-height: 20vh;
    -webkit-box-shadow: 0px 10px 37px -6px rgba(130,130,130,1);
    -moz-box-shadow: 0px 10px 37px -6px rgba(130,130,130,1);
    box-shadow: 0px 10px 37px -6px rgba(130,130,130,1);

    &:hover{
    transition: box-shadow 0.5s;
    -webkit-box-shadow: 0px 10px 35px 2px rgba(130,130,130,1);
    -moz-box-shadow: 0px 10px 35px 2px rgba(130,130,130,1);
    box-shadow: 0px 10px 35px 2px rgba(130,130,130,1);
    }
`;

class CourseCard extends Component {
  render() {
    return (
        <Wrapper>
            <CourseImg src="https://www.thecontemporarymusiccourse.com/images/site/tcmc-cover1.jpg" alt="course img"/>
            
            <CourseContent>
                <h1 className="course-card__content_title">Title</h1>
                <h5 className="course-card__content_date">Date</h5>
                <p className="course-card__content_level"> All Level</p>
                
                <CourseContentFooter>
                    <p className="course-card__content__footer_rating">Rating 4.5(number)</p>
                    <button className="course-card__content__footer_enrol">Enrol</button>
                    <p className="course-card__content__footer_cost">$ 13.99</p>
                </CourseContentFooter>
            </CourseContent>  
        </Wrapper>
    )
  }
}


export default CourseCard;