import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import todo from '../images/todo.png';
import placement from '../images/placement.png';
import github from '../images/github.png';
import hospital from '../images/hospital.png';


// Web projects
const webItem = [
  {
   
    title: 'Hospital Management system',
    TechStack: 'Technology used: React Js, Bootstrap, Context API',
    image: hospital,
    color: '#E5E483',
    githubLink: 'https://github.com/aniketlokare-948/Hospital-mangement-system'
  },
  {
    
    title: 'Placement Cell Management System',
    techStack: 'Tech Stack: React JS, , Bootstrap, Context API',

     image: placement,
    color: '#0FFFFF',
    githubLink: 'https://github.com/aniketlokare-948/Placement-Cell-management-system'
  },
  {
    
    title: 'To-Do List',
    techStack: 'Tech Stack- ReactJs, Bootstrap.',
     image: todo,
    color: '#d5ebda',
    githubLink:
      'https://github.com/aniketlokare-948/TO-DO-LIST'
  },
 

];



export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
     
      {/* </ScrollAnimation> */}
    </div>
  );
}
