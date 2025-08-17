import "./App.css";
import i18n from "i18next";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        key={i18n.language} // força re-render quando idioma muda
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        {i18n.language}
        <br />
        {t("helloWorld")}
      </motion.div>
    </>
  );
}

export default App;
