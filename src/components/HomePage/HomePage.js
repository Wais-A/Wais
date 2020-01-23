import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import Nav from '../Nav/Nav'

const HomePage = () =>
{

    const [ classname, setClassName ] = useState( 'container' );
    useEffect( () =>
    {


        setTimeout( () =>
        {
            setClassName( 'open' );
        }, 1000 );

    } );

    return (
        <div className={ classname }>
            <h1 className='name'>Wais Almakaleh</h1>
            <Nav/>
        </div>
    );

};

export default HomePage;