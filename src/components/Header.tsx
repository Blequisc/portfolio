import React from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import i18n from "i18next";

import "flag-icons/css/flag-icons.min.css";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";

const options = [
  { value: "en", label: <span className="fi fi-us"></span> },
  { value: "pt-BR", label: <span className="fi fi-br"></span> },
  // Add more languages as needed
];


const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <header className="bg-[#dfdfdf] h-15 rounded-lg border-3 border-[#c8c8c8] ">
        <div className="h-auto w-auto flex items-center justify-between align-center p-2">
          <div className="">
            {/*//TODO: Add "Gustavo" as in a logo; Maybe make it write itself, then delete and write "Bléqui", delete again and repeat
            //TODO: Find a lib that has a writing text animation  */}
            Esquerda
          </div>

          <div>
            {/* //TODO: Add navbar (Github, About, ?) */}
            {/* Meio */}
            {i18n.language}
          </div>

          <div className="flex items-center justify-between gap-4">
            <Select id="LanguageSel" options={options} defaultValue={options.find(option => option.value === i18n.language)} onChange={
              (selectedOption) => {
                if (selectedOption) {
                  i18n.changeLanguage(selectedOption.value);
                }
              }
            } />

            {/* //TODO: Add current language to display, list possible languages (En, Pt-BR) */}
            {/* <button className="flex items-center justify-center bg-[#c8c8c8] rounded-lg p-2">
              <span className="fi fi-br"></span>
              <ChevronDownIcon className="h-5" />
            </button> */}

            <a href="https://ko-fi.com/Z8Z51JSWBK" target="_blank">
              <img
                height="36"
                className="h-9 w-36"
                src="https://storage.ko-fi.com/cdn/kofi3.png?v=6"
                alt="Buy Me a Coffee at ko-fi.com"
              />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
