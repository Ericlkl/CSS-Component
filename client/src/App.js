import React from 'react';
import CourseCard from './Components/Cards/CourseCard';
import EventCard from './Components/Cards/EventCard';
import LevelCard from './Components/Cards/LevelCard';
import Plan from './Components/Sections/Plan';

function App() {
  return (
    <div className="App">
      <CourseCard/>
      <EventCard/>
      <LevelCard/>
      <Plan/>
    </div>
  );
}

export default App;
