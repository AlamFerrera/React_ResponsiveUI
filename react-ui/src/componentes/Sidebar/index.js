import React from 'react';
import { CloseIcon, 
        Icon, 
        SidebarContainer, 
        SidebarLink, 
        SidebarMenu, 
        SidebarRoute, 
        SidebarWrapper, 
        SideBtnWrap} from './sideBarElement';


function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="signUp" onClick={toggle}>Sign up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;