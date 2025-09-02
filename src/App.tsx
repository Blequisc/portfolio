import "./App.css";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import { AuroraText } from "./components/magicui/aurora-text";
import { ShineBorder } from "./components/magicui/shine-border";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className="h-full w-full justify-center flex-col overflow-x-hidden">
        <Header />

        <section
          // https://38.media.tumblr.com/4804740c190d8a0430550a2fc8541409/tumblr_ngk1sj6g8O1r2xv8po1_500.gif
          // https://i.pinimg.com/originals/72/d3/a3/72d3a32d3a6271e46d0e6bb25aafc5d0.gif

          id="HelloWorld"
          className="h-210 
          w-screen 
          flex 
          justify-center 
          items-center 
          bg-[url('https://i.gifer.com/embedded/download/Ao7v.gif')] 
          bg-black 
          bg-cover 
          bg-center 
          bg-no-repeat"
        >
          <h1
            className="text-9xl
          font-bold
          text-center
          text-white
          text-shadow-[0_0_30px_black]"
          >
            {t("hello")},{" "}
            <AuroraText className="text-shadow-none">{t("world")}</AuroraText>!
          </h1>
          =
        </section>

        <section
          id="About"
          className="bg-[#090909] h-150 w-screen text-white flex justify-center items-center relative"
        >
          <ShineBorder shineColor={["#D60270", "#9B4F96", "#0038A8", "#9B4F96"]} />
          <div className="flex gap-10 items-center">
            <div className="flex-col">
              <h1 className="text-4xl">{t("aboutMe")}</h1>
              <img
                // src="https://fastly.picsum.photos/id/219/600/800.jpg?hmac=DpHOApCynZkciB0YSmvifdZo-a7UAt8c0oqhV606NWE"
                src="https://i.imgur.com/HzdA2UU.png"
                alt=""
                className="h-100 w-auto rounded-full mt-5 mb-5"
              />
            </div>
            <div className="w-200">
              <p className="text-2xl">{t("aboutMeText")}</p>
            </div>
          </div>
        </section>

        <section
          id="Projects"
          className="h-175 bg-[url('https://cdn.wallpapersafari.com/3/99/7cPhMl.jpg')] bg-cover bg-top"
        ></section>
      </div>
    </>
  );
}

export default App;
