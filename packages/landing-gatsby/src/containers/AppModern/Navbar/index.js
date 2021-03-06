import React, { useState, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import { search } from 'react-icons-kit/feather/search';
import Logo from 'common/src/components/UIElements/Logo';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';
import useOnClickOutside from 'common/src/hooks/useOnClickOutside';
import NavbarWrapper, { MenuArea, MobileMenu, Search } from './navbar.style';
//import LogoImage from 'common/src/assets/image/appModern/logo-white.png';
import LogoImage from 'common/src/assets/image/appModern/logo-white.svg';
// import LogoImageAlt from 'common/src/assets/image/appModern/logo.png';
import LogoImageAlt from 'common/src/assets/image/appModern/logo.svg';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        navbar {
          logo {
            publicURL
          }
          navMenu {
            id
            label
            path
            offset
          }
        }
      }
    }
  `);
  const { navMenu } = data.appModernJson.navbar;
  const [state, setState] = useState({
    search: '',
    searchToggle: false,
    mobileMenu: false,
  });

  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () =>
    setState({ ...state, searchToggle: false })
  );

  const toggleHandler = type => {
    if (type === 'search') {
      setState({
        ...state,
        search: '',
        searchToggle: !state.searchToggle,
        mobileMenu: false,
      });
    }

    if (type === 'menu') {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
      });
    }
  };

  const handleOnChange = event => {
    setState({
      ...state,
      search: event.target.value,
    });
  };

  const handleSearchForm = event => {
    event.preventDefault();

    if (state.search !== '') {
      console.log('search data: ', state.search);

      setState({
        ...state,
        search: '',
      });
    } else {
      console.log('Please fill this field.');
    }
  };

  const scrollItems = [];

  navMenu.forEach(item => {
    scrollItems.push(item.path.slice(1));
  });

  const handleRemoveMenu = () => {
    setState({
      ...state,
      mobileMenu: false,
    });
  };

  const handleRedirect = () => {
    if(window.location.href.includes("darfichraus")) {
      window.location = "https://webapp.darfichraus.de";
    }
    else {
      //window.location = process.env.DEV_WEBAPP_URL;
      window.location = "https://app.crimsy.tech";
    }
  };

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          href="/appmodern"
          logoSrc={LogoImage}
          title="App Modern"
          className="main-logo"
        />
        <Logo
          href="/appmodern"
          logoSrc={LogoImageAlt}
          title="App Modern"
          className="logo-alt"
        />
        {/* end of logo */}

        <MenuArea className={state.searchToggle ? 'active' : ''}>
          <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} />
          {/* end of main menu */}

          {/* end of search */}

          <AnchorLink offset={84}>
            <Button
              className="trail"
              title="Zur Web App"
              onClick={handleRedirect}
            />
          </AnchorLink>

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler('menu')}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {navMenu.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleRemoveMenu}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
