import React from 'react';
import { CloseIcon, 
        Icon, 
        SidebarContainer, 
        SidebarLink, 
        SidebarMenu, 
        SidebarRoute, 
        SidebarWrapper, 
        SideBtnWrap} from './sideBarElement';


function Sidebar() {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" >About</SidebarLink>
                    <SidebarLink to="discover" >Discover</SidebarLink>
                    <SidebarLink to="services" >Services</SidebarLink>
                    <SidebarLink to="signUp" >Sign up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;