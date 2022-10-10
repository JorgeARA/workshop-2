import React, { Component } from 'react';
import logo from '../../../public/images/logo.svg'
import menuToggle from '../../../public/images/icon-hamburger.svg'


class Header extends Component {

    listNav = [
        "About","Careers","Events","Products","Support"
    ]

    render(){
        return (
            <header className='header'>
                
                <div className='header__container container'>
                    <nav className='header__nav'>
                        <a className='header__logo'><img src={logo}></img></a>
                        
                        <img className='header__toggle' src={menuToggle}></img>

                        <ul className='header__list'>
                            {
                                this.listNav.map((element,index)=>(
                                    <li key={index} className='header__item'>{element}</li>
                                ))
                            }
                        </ul>
                        
                    </nav>
                    <div className='header-bottom'>
                            <h1 className='header-title'>IMMERSIVE<br></br>EXPERIENCES<br></br>THAT DELIVER</h1>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
