import React, { useEffect, useState } from 'react';
import './HomePage.scss';


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

        </div>
    );

};

export default HomePage;