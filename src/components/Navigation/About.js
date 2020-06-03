import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './styles/About.scss';
const About = () =>
{

    return (
        <div className={ 'AboutNxt' }>

            <Link to='/'>
                <AiOutlineClose className='icon' />
            </Link>
            <div className='AboutInfo'>
                <h1>{"I'm Wais Almakaleh"}</h1>
                <h3>
                    { "I grew up in, Brooklyn-New York, until 2017 where I moved to a rural part of Pennsylvania. I moved around and didn't really settle in anywhere until I moved to Pottsville, a small city sourounded by mountains and forest." }
                </h3>
                <h3>
                    { "I worked in multiple warehouses and learned some new skills, using a forklift, communcation, and others that come along with the warehouse industry, some I believe will come very useful and others that won't.I of course wasn't happy with working in warehouses, not because it was hard, in fact, I it took was to memorize what I'm supposed to do and then just let my muscle memory take over without having the think about it, but this was my issue, I wanted something harder that could challenge me everyday instead just the day of training" }
                </h3>
                <h3>
                    {"I've always loved coding used to take lessons online for fun, but after my experience with the jobs I've had, I decided to make it a career. I attending Lambda school plus also buy several dozen classes on Udemy, after hundreds of hours of videos and practicing I know I'm ready to presure programming full as a software engineer"}
                </h3>
            </div>
        </div>
    );
};

export default About;