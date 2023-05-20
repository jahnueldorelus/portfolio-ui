import Container from "react-bootstrap/Container";
import LinkedInImg from "@assets/linked-in-logo.jpg";
import { Fragment } from "react";

export const AppFooter = () => {
  const email = "jahnueldorelus@gmail.com";

  /**
   * Retrieves the JSX of all social links.
   */
  const getSocialLinksJSX = () => {
    return (
      <Fragment>
        <a
          className="p-1 rounded"
          href="https://www.linkedin.com/in/jahnueldorelus/"
          target="_blank"
          aria-label="Jahnuel Dorelus's linked-in profile page"
        >
          <img
            className="rounded"
            src={LinkedInImg}
            alt="linkedin logo"
            width="30"
            rel="nofollow"
          />
        </a>
      </Fragment>
    );
  };

  return (
    <Container className="py-4 d-flex flex-column flex-sm-row justify-content-between align-items-center text-font-tertiary text-center fs-5">
      {/* Social media links (for small mobile screens) */}
      <div className="mb-2 d-sm-none">{getSocialLinksJSX()}</div>

      {/* Copyright */}
      <p className="mx-2 mb-0">
        &copy;&nbsp;Jahnuel Dorelus {new Date().getFullYear()}
      </p>

      {/* Social media links (for large mobile screens and desktop) */}
      <div className="d-none d-sm-block">{getSocialLinksJSX()}</div>

      {/* Email */}
      <a
        className="px-2 mb-0 text-decoration-none text-secondary rounded"
        href={`mailto:${email}`}
        aria-label="Email Jahnuel Dorelus"
      >
        {email}
      </a>
    </Container>
  );
};
