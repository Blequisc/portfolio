import "./App.css";
import { useTranslation } from "react-i18next";

import { Button } from "./components/ui/button";

import Header from "./components/Header";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
    </>
  );
}

export default App;
