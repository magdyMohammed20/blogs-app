import { useState } from "react";
import { routes } from "../../utils/routes";
import {
  NavParent,
  NavLink,
  NavInnerParent,
  LogoLink,
  LogoImg,
  LogoText,
  HumbParent,
  HumbBtn,
  HumbSvg,
  RoutesParent,
  RoutesList,
} from "./elements"; // Navbar Reusable Styled Components Elements

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  // Map On Routes Data To Produce Nav Links
  const mapRoutes = routes.map((route) => (
    <li key={route.id}>
      <NavLink to={route.path} aria-current="page">
        {route.id}
      </NavLink>
    </li>
  ));

  return (
    <NavParent>
      <NavInnerParent>
        <LogoLink href="#">
          <LogoImg />
          <LogoText>Blogs</LogoText>
        </LogoLink>
        <HumbParent>
          {/* Menu Button For Show In Small Screens */}
          <HumbBtn onClick={() => toggleOpenMenu()}>
            <span className="sr-only">Open main menu</span>
            <HumbSvg>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </HumbSvg>
          </HumbBtn>
        </HumbParent>

        {/* Render Nav Links */}
        <RoutesParent
          className={`  ${openMenu ? "md:flex" : "md:flex hidden"}`}>
          <RoutesList>{mapRoutes}</RoutesList>
        </RoutesParent>
      </NavInnerParent>
    </NavParent>
  );
};

export default Navbar;
