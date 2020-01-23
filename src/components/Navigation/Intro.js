import React, { useEffect, useState } from 'react';
import './Intro.scss';
import { FaXing } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
const Intro = () =>
{

    const [ intro, setIntro ] = useState( 'intro' );

    useEffect( () =>
    {


        setTimeout( () =>
        {
            setIntro( 'introNxt' );
        }, 500 );

    } );

    return (
        <div className={ intro }>
            <Nav />
            <Link to='/'>
                <FaXing className='icon' />
            </Link>
            <div className='introInfo'>
                <h1>Hello! I'm Wais</h1>
                <h3>I'm a Full Stack Web Developer</h3>
                <h4>My skill as follows</h4>
                <ul className='list skills'>
                    <li>HTML</li>
                    <li>XML</li>
                    <li>CSS</li>
                    <li>LESS</li>
                    <li>SASS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Boostrap</li>
                    <li>jQuery</li>
                    <li>GreenSock</li>
                    <li>Node.js</li>
                    <li>SQL</li>
                </ul>
                <h3>Please feel free to go though my Linkedin to know more about me</h3>
            </div>
        </div>
    );
};

export default Intro;