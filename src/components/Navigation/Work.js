import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './styles/Work.scss'
const Work = () =>
{

    const [ Work, setWork ] = useState( 'Work' );

    useEffect( () =>
    {


        setTimeout( () =>
        {
            setWork( 'WorkNxt' );
        }, 500 );

    } );

    return (
        <div className={ Work }>
            <Link to='/'>
                <AiOutlineClose className='icon' />
            </Link>
            <div className='WorkInfo'>
                <a href='https://drive.google.com/file/d/10diYQxX_-JSnodCS3p5pJv5smvP0utGA/view?usp=sharing' target='_blank#'><h1>Résumé</h1></a>
            </div>
        </div>
    );
};

export default Work;