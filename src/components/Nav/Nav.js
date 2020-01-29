import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Nav.scss';
const Nav = () =>
{
    const history = useHistory()
    const location = useLocation()
    function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}
console.log( location.pathname)



    const [ classname, setClass ] = useState( 'nav' );
    const [ classExit, setClassExit ] = useState(false );

    
    const click = () => {
        // setClassExit('exit-animation')
        setClassExit(!classExit)
    }
            
    useEffect( () =>
    {
        setTimeout( () =>
        {
            setClass( 'classNameAfter' );
        }, 1000 );
    } );



    return (
        <div className={ classname }>
            <nav onClick={click} className={classExit? 'exit-animation': ''}>

                <Link to='/Intro' >
                    INTRO
                </Link>
                <Link to='/Work'>
                    WORK
                </Link>

                <Link to='/About'>
                    ABOUT
                </Link>

                <Link to='/Contact'>
                    CONTACT
                </Link>

            </nav>
        </div>
    );
};

export default Nav;