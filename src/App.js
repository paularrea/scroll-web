import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { ParallaxProvider } from "react-scroll-parallax";
import "./sass/App.scss";
import AppRoutes from "./routes/Routes";

function App() {
  const locale = "en";
  const [currentLocale, setCurrentLocale] = useState(locale);

  const handleChange = (e) => {
    setCurrentLocale(e.target.value);
    sessionStorage.setItem("LOCALE", e.target.value);
  };

  useEffect(() => {
    setCurrentLocale(
      sessionStorage.getItem("LOCALE")
        ? sessionStorage.getItem("LOCALE")
        : currentLocale
    );
  }, [currentLocale]);

  return (
    <IntlProvider locale={currentLocale} defaultLocale={locale}>
      <ParallaxProvider>
        <AppRoutes currentLocale={currentLocale} handleChange={handleChange} />
      </ParallaxProvider>
    </IntlProvider>
  );
}

export default App;
