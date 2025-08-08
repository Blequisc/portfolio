import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return <>
  
{t('langInPort')}

  </>;
}

export default App;
