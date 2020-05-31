import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './styles/Work.scss';
const Work = () =>
{

    return (
        <div className={ 'WorkNxt' }>
            <Link to='/'>
                <AiOutlineClose className='icon' />
            </Link>
            <div className='WorkInfo'>
                <a href='https://drive.google.com/file/d/10diYQxX_-JSnodCS3p5pJv5smvP0utGA/view?usp=sharing' target='_blank#'><h1>Resume</h1></a>
            </div>
        </div>
    );
};

export default Work;