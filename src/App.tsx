import { Fragment, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppHeader } from "@components/header";
import Button from "react-bootstrap/Button";
import WebFont from "webfontloader";
import { AppFooter } from "@components/footer";
import { FocusableReference } from "@components/focusable-reference";
import "./App.scss";

function App() {
  const navigationZIndex = 990;
  const location = useLocation();
  const topOfPageRef = useRef<HTMLDivElement>(null);
  const topOfMainRef = useRef<HTMLDivElement>(null);

  /**
   * Loads the fonts used in the application
   */
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Bungee Shade", "Neucha", "Londrina Solid"],
      },
    });
  }, []);

  /**
   * Sets the focus to the top of the page whenever the page changes.
   */
  useEffect(() => {
    if (topOfPageRef.current) {
      topOfPageRef.current.focus();
    }
  }, [location.pathname]);

  /**
   * Changes the focus to the main content.
   */
  const onSkipMainContentClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (topOfMainRef.current) {
      topOfMainRef.current.focus();
    }
  };

  return (
    <Fragment>
      <FocusableReference ref={topOfPageRef} />

      <Button
        className="visually-hidden-focusable px-2 py-1 ms-2 mt-2 mb-0 bg-secondary text-quatenary border border-primary rounded w-fit position-absolute top-0"
        style={{ zIndex: navigationZIndex + 1 }}
        onClick={onSkipMainContentClick}
      >
        Skip to main content
      </Button>

      {/* Header of the application */}
      <header className="px-2">
        <AppHeader />
      </header>

      {/* Main content of the application */}
      <FocusableReference ref={topOfMainRef} />
      <main className="py-5">
        <Outlet />
      </main>

      {/* Footer of the application */}
      <footer className="px-2">
        <AppFooter />
      </footer>
    </Fragment>
  );
}

export default App;
