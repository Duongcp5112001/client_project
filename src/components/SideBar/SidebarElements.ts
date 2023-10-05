import { FaBars } from 'react-icons/fa'; 
import { NavLink as Link } from 'react-router-dom'; 
import styled from 'styled-components'; 
  
export const Nav = styled.nav` 
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
`; 
  
export const NavLink = styled(Link)` 
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none; 
  text-align: center;
`; 
  
export const Bars = styled(FaBars)` 
  display: none; 
  color: #808080; 
  @media screen and (max-width: 768px) { 
    display: block; 
    position: absolute; 
    top: 0; 
    right: 0; 
    transform: translate(-100%, 75%); 
    font-size: 1.8rem; 
    cursor: pointer; 
  } 
`; 
  
export const NavMenu = styled.div` 
  display: grid; 
  align-items: center; 
  @media screen and (max-width: 768px) { 
    display: none; 
  } 
`; 
  
export const NavBtn = styled.nav` 
  display: flex; 
  align-items: center; 
  margin-right: 24px; 
  @media screen and (max-width: 768px) { 
    display: none; 
  } 
`; 
  
export const NavBtnLink = styled(Link)` 
  border-radius: 4px; 
  background: #808080; 
  padding: 10px 22px; 
  color: #000000; 
  outline: none; 
  border: none; 
  cursor: pointer; 
  transition: all 0.2s ease-in-out; 
  text-decoration: none; 
  margin-left: 24px; 
  &:hover { 
    transition: all 0.2s ease-in-out; 
    background: #fff; 
    color: #808080; 
  } 
`;