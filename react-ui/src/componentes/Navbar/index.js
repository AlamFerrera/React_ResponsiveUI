import React, { Fragment, useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { MobileIcon, 
         Nav, 
         NavbarContainer, 
         NavBtn, 
         NavBtnLink, 
         NavItem, 
         NavLinks, 
         NavLogo, 
         NavMenu } from './NavbarElements';

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }
        else{
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <Fragment>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>dolla</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signUp" >Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </Fragment>
    )
}

export default Navbar;
