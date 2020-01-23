import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import './Nav.scss'
const Nav = () => {

const [classname, setClass] = useState('nav');

    const onClick = () => {

        setClass('navNext')
    }
    
    useEffect(() => {
       setTimeout(() => {
           setClass('classNameAfter')
       }, 1000);
    });

    return(
        <div className={classname}>
            <nav>
                <Link to='/Intro' >
                    INTRO
                </Link>
                <Link to='/'>
                 WORK
                </Link>
                <Link to='/'>
                ABOUT
                </Link>
                <Link to='/'>
                CONTACT
                </Link>
                </nav>
        </div>
    )
}

export default Nav