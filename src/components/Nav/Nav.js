import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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