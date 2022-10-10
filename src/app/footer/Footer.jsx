import React, { Component } from "react";
import logo from '../../../public/images/logo.svg'
import SocialF from '../../../public/images/icon-facebook.svg'
import SocialI from '../../../public/images/icon-instagram.svg'
import SocialP from '../../../public/images/icon-pinterest.svg'
import SocialT from '../../../public/images/icon-twitter.svg'

class Footer extends Component{
listFooter = [
        "About","Careers","Events","Products","Support"
    ]

listSocial = [
            {src:SocialF},
            { src:SocialI },
            { src:SocialP },
            {src:SocialT}]
    render() {
        
        return (
            <footer className="footer">
                <div className="footer__container container">
                    <div className="footer__links">   
                    <img src={logo} className="footer__logo" alt="logo"/>                 
                        <ul>
                            {
                                this.listFooter.map((element,index)=>(
                                    <li key={index}>{element}</li>
                                ))
                            }
                        </ul> 
                    </div>
                    <div className="footer__container-socialmedia">
                    <div className="footer__socialmedia">
                        <ul>
                            {
                                this.listSocial.map((element,index)=>(
                                    <img key={index} src={element.src}></img>
                                ))
                            }
                        </ul> 
                    </div>
                    <p>© 2021 Loopstudios. All rights reserved.</p>
                </div>
                </div>
            </footer>
        )
    }
}

export default Footer;