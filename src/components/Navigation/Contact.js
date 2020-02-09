import './styles/Contact.scss';

import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {FaLinkedin} from 'react-icons/fa'
import { FaTwitter} from 'react-icons/fa'
const Contact = () =>
{

    const [ Contact, setContact ] = useState( 'Contact' );

    useEffect( () =>
    {


        setTimeout( () =>
        {
            setContact( 'ContactNxt' );
        }, 500 );

    } );

    return (
        <div className={ Contact }>

            <Link to='/'>
                <AiOutlineClose className='icon' />
            </Link>
            <div className='ContactInfo'>
                <h1>For Business Inquiries</h1>
                <h3>WaisAlmakaleh@gmail.com</h3>
                <h3>(917)690-6292</h3>
                <a href='https://www.linkedin.com/in/wais-almakaleh-43707a158/' target='_blank#'>
                    <FaLinkedin className='linkedin' />
                </a>
                <a href='https://twitter.com/AlmakalehWais' target='_blank#'>
                    <FaTwitter className='Twitter' />
                </a>

            </div>
        </div>
    );
};

export default Contact;