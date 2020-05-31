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
                <h1>About</h1>
            </div>
        </div>
    );
};

export default About;