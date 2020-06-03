import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Nav.scss';



const Nav = ( props ) =>
{

  // className is a class that lest the nav slowly come in
  const [ className, setClass ] = useState( 'nav' );
  // pathafterhome compares the url and allows the nav to flow up
  const [ pathAfterHome, setPathAfterHome ] = useState( '' );
  // navA sets a classname to the navBar
  const [ navA, setNavA ] = useState( '' );

  let history = useHistory();
  useEffect( () => {
      // sets the url
      setPathAfterHome( history.location.pathname );

      // I couldn't get useEffect to work without doing this
      window.addEventListener('click', ()=>{
      setPathAfterHome( history.location.pathname );
    })
    // compares the url, url is sometimes just an empty string and sometimes a string with a space in it, idk why...
    pathAfterHome !== '/' && pathAfterHome !== ' ' && pathAfterHome !== '' ? setNavA('afterHome'): setNavA('')

  //removes warnings and allows the useEffedt ot only render when these two change
  }, [ pathAfterHome, history.location.pathname]);


  setTimeout(() => {
    setClass( 'classNameAfter')
  }, 1300);

  return (
    <div className={ `${ className} ${navA}` }>
      <nav >
        {/* <NavLink activeClassName='active' to='/Intro' >
          INTRO
        </NavLink> */}

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



