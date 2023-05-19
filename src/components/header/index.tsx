import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import CloseButton from "react-bootstrap/CloseButton";
import Nav from "react-bootstrap/Nav";
import AppLogo from "@assets/portfolio-logo.png";
import AppLogoShort from "@assets/portfolio-logo-short.png";
import { NavLink } from "react-router-dom";
import { uiRoutes } from "./ui-routes";
import { useState } from "react";
import "./index.scss";

export const AppHeader = () => {
  const mobileNavId = "app-navigation-mobile";
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);

  /**
   * Click handler for the mobile menu toggle.
   */
  const onMobileMenuToggle = () => {
    setIsOffcanvasVisible(!isOffcanvasVisible);
  };

  /**
   * Creates a nav item.
   * @param itemLink The path to link the nav item to
   * @param itemName The name of the nav item
   */
  const createNavItem = (itemLink: string, itemName: string) => {
    return (
      <Nav.Item className="me-3 d-none d-sm-block" as="li">
        <NavLink
          className="px-2 py-2 rounded fs-5 text-tertiary text-decoration-none"
          to={itemLink}
        >
          {itemName}
        </NavLink>
      </Nav.Item>
    );
  };

  /**
   * Creates an offcanvas nav item.
   * @param itemLink The path to link the nav item to
   * @param itemName The name of the nav item
   */
  const createOffCanvasNavItem = (itemLink: string, itemName: string) => {
    return (
      <Nav.Item className="mx-1 mb-2 fs-5 rounded" as="li">
        <NavLink
          className="d-block px-3 py-1 rounded text-decoration-none"
          to={itemLink}
          onClick={onMobileMenuToggle}
        >
          {itemName}
        </NavLink>
      </Nav.Item>
    );
  };

  return (
    <Navbar className="app-nav pb-0" expand="sm">
      <Container className="d-flex flex-row-reverse flex-sm-row">
        <NavLink className="rounded" to={uiRoutes.home}>
          {/* Logo for smaller screens */}
          <Navbar.Brand className="p-0 me-0 d-sm-none">
            <img
              className="app-nav-brand w-fit"
              src={AppLogoShort}
              alt="jahnuel dorelus logo"
              height={55}
            />
          </Navbar.Brand>

          {/* Logo for larger screens */}
          <Navbar.Brand className="p-0 me-0 d-none d-sm-block">
            <img
              className="app-nav-brand"
              src={AppLogo}
              alt="jahnuel dorelus logo"
              height={55}
            />
          </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle
          className="px-2 w-fit bg-secondary border-transparent"
          onClick={onMobileMenuToggle}
          label="toggle navigation menu"
          aria-controls={mobileNavId}
        />

        <Nav className="nav-desktop d-flex flex-row justify-content-between w-100">
          <ul className="p-0 m-0 d-flex justify-content-end w-100">
            {createNavItem(uiRoutes.home, "Home")}
            {createNavItem(uiRoutes.projects, "Projects")}
          </ul>
        </Nav>

        <Offcanvas
          id={mobileNavId}
          className="bg-secondary w-fit"
          placement="start"
          show={isOffcanvasVisible}
          onHide={onMobileMenuToggle}
        >
          <Offcanvas.Header className="px-4 bg-primary">
            <p className="m-0 fs-5">Menu</p>
            <CloseButton
              className="m-0 bg-light"
              variant="white"
              aria-label="Close navigation menu"
              onClick={onMobileMenuToggle}
            />
          </Offcanvas.Header>

          <Offcanvas.Body className="nav-offcanvas">
            <Nav onSelect={onMobileMenuToggle} as="ul">
              {createOffCanvasNavItem(uiRoutes.home, "Home")}
              {createOffCanvasNavItem(uiRoutes.projects, "Projects")}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};
