import React, { Fragment } from 'react';
import {FaBars} from 'react-icons/fa';
import { MobileIcon, 
         Nav, 
         NavbarContainer, 
         NavItem, 
         NavLinks, 
         NavLogo, 
         NavMenu } from './NavbarElements';

const Navbar = () => {
    return (
        <Fragment>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">dolla</NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" >About</NavLinks>
                        </NavItem>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </Fragment>
    )
}

export default Navbar;
