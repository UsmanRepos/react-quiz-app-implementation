import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const index = () => {
    return (
        <div className='header'>
            <div className='header__content'>
                <Link to='/' className='title'>intuitive quiz hub</Link>
            </div>
        </div>

    );
};

export default index;
