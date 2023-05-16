import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import { AppHeader } from "@components/header";
import "./App.scss";

function App() {
  return (
    <Fragment>
      {/* Header of the application */}
      <header>
        <AppHeader />
      </header>

      {/* Main content of the application */}
      <main>
        <Container className="py-5">
          <Outlet />
        </Container>
      </main>

      {/* Footer of the application */}
      <footer></footer>
    </Fragment>
  );
}

export default App;
