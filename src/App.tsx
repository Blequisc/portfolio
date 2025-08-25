import "./App.css";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import { AuroraText } from "./components/magicui/aurora-text";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className="h-full w-full justify-center flex-col">
        <Header />

        <section
          id="HelloWorld"
          className="h-180 w-screen flex justify-center items-center bg-[#1b1b1b]"
        >
          <h1 className="text-9xl font-bold text-center text-white">
            {t("hello")}, <AuroraText>{t("world")}</AuroraText>!
          </h1>
        </section>

        <section
          id="About"
          className="bg-[#121212] h-150 w-screen text-white flex justify-center items-center"
        >
          <div className="flex gap-10 items-center">
            <div className="flex-col">
              <h1 className="text-4xl">{t("aboutMe")}</h1>
              <img
                src="https://fastly.picsum.photos/id/219/600/800.jpg?hmac=DpHOApCynZkciB0YSmvifdZo-a7UAt8c0oqhV606NWE"
                alt=""
                className="h-100 w-auto rounded-lg mt-5 mb-5"
              />
            </div>
            <div className="w-200">
              <p className="text-2xl">{t("aboutMeText")}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
