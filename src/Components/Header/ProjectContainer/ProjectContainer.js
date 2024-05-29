/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import "./ProjectContainer.css";

const ProjectContainer = () => {
    const projects=[
        {
            img:"https://cdn-icons-png.flaticon.com/512/10355/10355707.png",
            title:"IoT",
            desc:"E-Vehicle charging station using IoT and Solar",
            link:"https://example.com/iot",
        },
        {
            img:"https://t4.ftcdn.net/jpg/02/09/86/17/360_F_209861750_nj9LnTcDbDIVOkJg7EiE6E9fZ7U31Sjf.jpg",
            title:"React js",
            desc:"Family budget tracker",
            link:"https://example.com/budget-tracker",
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudT6NFULN2j--cPRYrrwGvEzOed_AnLuebJ3R_WvfTg&s",
            title:"React js",
            desc:"Quote Generator",
            link:"https://example.com/quote-generator",
        },
    ];

    return (
        <div>
            <Element className='projectContainer' id='projects'>
                <h1>PROJECTS</h1>
                <p className='typing__animation'>Some of my projects are shown here</p>
                <div className='projectContainer__projects'>
                    {
                        projects.map((project, index) => (
                            <Project 
                                key={index} 
                                img={project.img} 
                                title={project.title} 
                                desc={project.desc} 
                                link={project.link}
                            />
                        ))
                    }
                </div>
            </Element>
        </div>
    );
};

export default ProjectContainer;
