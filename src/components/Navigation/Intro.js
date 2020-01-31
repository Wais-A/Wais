import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './styles/Intro.scss'
const Intro = (props) =>
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
            
            <Link to='/'>
                <AiOutlineClose className='icon' />
            </Link>
            <div className='introInfo'>
                <h1>{ "HI! I'm Wais" }</h1>
                <h2>{ "I'm a Full Stack Web Developer" }</h2>
                <h2>My skills as follows</h2>
                <ul className='list skills'>
                    <li>HTML</li>
                    <li>XML</li>
                    <li>CSS</li>
                    <li>CSS Animation</li>
                    <li>LESS</li>
                    <li>SASS</li>
                    <li>GreenSock</li>
                    <li>Boostrap</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>jQuery</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Bash</li>
                    <li>Axios</li>
                    <li>NPM</li>
                    <li>Yarn</li>
                    <li>Node.js</li>
                    <li>SQL</li>
                    <li>{"Restfull Api's"}</li>
                </ul>
                <h3>Please feel free to go though my Linkedin to know more about me</h3>
            </div>
        </div>
    );
};

export default Intro;