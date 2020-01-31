import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Nav.scss';



const Nav = (props) => {
   

    const [ className, setClass ] = useState( 'nav' );
    const [ pathAfterHome, setPathAfterHome ] = useState('');
    const [navA, setNavA] = useState('')

    useEffect( () => {
        
        setTimeout( () => {
            setClass( 'classNameAfter' );
            

        }, 1000 );


        setPathAfterHome(window.location.pathname)

      
             if (pathAfterHome === '/Intro' ||
                pathAfterHome === '/Work' ||
                pathAfterHome === '/About' ||
                pathAfterHome === '/Contact'
                    ) 
             {
            setNavA('afterHome')
            }else{
                setNavA('')
            }
          


    });

    const history = useHistory()

    const click = () => {
        history.push('/work')
    }

    
    // console.log(navA)
    // console.log(pathAfterHome)

        

    return (
        <div className={`${className} ${navA}`}>
            <nav >
                <NavLink activeClassName='active' to='/Intro' >
                    INTRO
                </NavLink>

                <NavLink activeClassName='active' to='/Work'>
                   WORK
                </NavLink>

                <NavLink activeClassName='active' to='/About'>
                    ABOUT
                </NavLink>

                <NavLink activeClassName='active' to='/Contact'>
                    CONTACT
                </NavLink>
               
                
            </nav>
        </div>
    );
};

export default Nav;