import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './styles/Contact.scss';
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
            </div>
        </div>
    );
};

export default Contact;