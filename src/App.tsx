import "./App.css";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import { AuroraText } from "./components/magicui/aurora-text";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className="h-full w-full flex justify-center">

          <Header />
          <br />

          <div className="h-180 w-screen flex justify-center items-center bg-[#160239]">
            <h1 className="text-9xl font-bold text-center text-white">
              {t("hello")}, <AuroraText>{t("world")}</AuroraText>!
            </h1>
          </div>

      </div>
    </>
  );
}

export default App;
