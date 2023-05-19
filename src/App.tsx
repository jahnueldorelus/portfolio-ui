import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "@components/header";
import WebFont from "webfontloader";
import "./App.scss";
import { AppFooter } from "@components/footer";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Bungee Shade", "Neucha", "Londrina Solid"],
      },
    });
  }, []);

  return (
    <Fragment>
      {/* Header of the application */}
      <header>
        <AppHeader />
      </header>

      {/* Main content of the application */}
      <main className="py-5">
        <Outlet />
      </main>

      {/* Footer of the application */}
      <footer>
        <AppFooter />
      </footer>
    </Fragment>
  );
}

export default App;
