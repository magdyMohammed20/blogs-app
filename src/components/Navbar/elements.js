import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
const NavParent = styled.nav.attrs({
    className:
      "bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600",
})``;

const NavInnerParent = styled.div.attrs({
    className:
      "max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4",
})``;
  
const NavLink = styled(Link).attrs({
    className:
      "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500",
})``;
  
const LogoLink = styled.a.attrs({
    className:
      "flex items-center space-x-3 rtl:space-x-reverse",
  })``;

  const LogoImg = styled.img.attrs({
    className:
          "h-8",
      alt: "Flowbite Logo",
          src: Logo
  })``;

  const LogoText = styled.span.attrs({
    className: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
  })``;

const HumbParent = styled.div.attrs({
    className: "flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
})``;
  
const HumbBtn = styled.button.attrs({
    className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    type: "button",
    "data-collapse-toggle": "navbar-sticky",
    "aria-controls":"navbar-sticky",
    "aria-expanded":"false"
    
})``;
  
const HumbSvg = styled.svg.attrs({
    className: "w-5 h-5",
   "aria-hidden":"true",
    xmlns:"http://www.w3.org/2000/svg",
    fill:"none",
    viewBox:"0 0 17 14"
    
})``;
  
const RoutesParent = styled.div.attrs({
    className: "items-center justify-between  w-full  md:w-auto md:order-1",
    id:"navbar-sticky"
})``;

const RoutesList = styled.ul.attrs({
    className: "flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",
})``;
  
export {
    NavParent, NavLink, NavInnerParent, LogoLink, LogoImg, LogoText,
    HumbParent,HumbBtn,HumbSvg,RoutesParent,RoutesList
}