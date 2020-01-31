import React, { useEffect, useState } from 'react';
import { FaXing } from 'react-icons/fa';
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
                <FaXing className='icon' />
            </Link>
            <div className='WorkInfo'>
                <h1>Hello</h1>
            </div>
        </div>
    );
};

export default Work;