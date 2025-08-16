import "./App.css";
import i18n from "i18next"
import Header from "./components/Header";

function App() {

  return (
    <>
      <Header />
      {i18n.language}
    </>
  );
}

export default App;
