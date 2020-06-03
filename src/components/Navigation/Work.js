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
                <a href='https://drive.google.com/file/d/10diYQxX_-JSnodCS3p5pJv5smvP0utGA/view?usp=sharing' target='_blank#'><h1> Click to view full Resume</h1></a>
            </div>
            <h3>{"Experienced Machine Operator with a demonstrated history of working in the warehousing industry. Skilled in Retail, Sales Management, Inventory Management, and Leadership. Strong communcations skills and operations professional. I'm Attending Lambda School for full-stack web development."}</h3>
        </div>
    );
};

export default Work;