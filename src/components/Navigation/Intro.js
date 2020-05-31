import './styles/Intro.scss';

import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Intro = ( props ) =>
{

    return (
        <div className={ 'introNxt' }>

            <Link to='/'>
                <AiOutlineClose className='icon' />
            </Link>
            <div className='introInfo'>
                <h1>{ "HI! I'm Wais" }</h1>
                <h2>{ "I'm a Full Stack Web Developer" }</h2>

                <h3>Please feel free to go though my <a href='https://www.linkedin.com/in/wais-almakaleh-43707a158/' target="_blank" rel="noopener noreferrer" className='link'>Linkedin</a> to know more about me</h3>
            </div>
        </div>
    );
};

export default Intro;