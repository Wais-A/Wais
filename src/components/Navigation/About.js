import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './styles/About.scss';
const About = () =>
{

    const [ About, setAbout ] = useState( 'About' );

    useEffect( () =>
    {


        setTimeout( () =>
        {
            setAbout( 'AboutNxt' );
        }, 500 );

    } );

    return (
        <div className={ About }>
          
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