import Container from "react-bootstrap/Container";

export const AppFooter = () => {
  const email = "jahnueldorelus@gmail.com";

  return (
    <Container className="py-4 d-flex flex-column flex-sm-row justify-content-between text-font-tertiary text-center fs-5">
      <p className="mx-2 mb-0">
        &copy;&nbsp;Jahnuel Dorelus {new Date().getFullYear()}
      </p>
      <a
        className="mx-2 mb-0 text-decoration-none text-secondary rounded"
        href={`mailto:${email}`}
        aria-label="Email Jahnuel Dorelus"
      >
        {email}
      </a>
    </Container>
  );
};
