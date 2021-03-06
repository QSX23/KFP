import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import { connect } from 'react-redux';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to ='/'>
            <span className='logo'>Fitzgerald</span>
            <span className='logo-year'> 2024</span>
        </Link>
    <div className='options'>
        <Link className='option'>About Us</Link>
        <Link className='option'>Contact</Link>
        <Link className='option' to='/donate'>Donate</Link>
    </div>

    </div>

);

const mapStateToProps = (state) =>({
    selected:state.donate.selected
})


export default connect(mapStateToProps, null)(Header);