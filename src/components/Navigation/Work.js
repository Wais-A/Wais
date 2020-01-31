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
                <h1>Hello</h1>
            </div>
        </div>
    );
};

export default Work;