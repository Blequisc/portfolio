import "./App.css";
import i18n from "i18next"
import Header from "./components/Header";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      {i18n.language}
      <br/> 
      {t("helloWorld")}
    </>
  );
}

export default App;
