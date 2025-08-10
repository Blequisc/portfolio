import "./App.css";
import { useTranslation } from "react-i18next";

import { Button } from "./components/ui/button";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Button>{t("helloWorld")}</Button>
    </>
  );
}

export default App;
