import React, { Fragment } from 'react';
import {FaBars} from 'react-icons/fa';
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
    return (
        <Fragment>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">dolla</NavLogo>
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
