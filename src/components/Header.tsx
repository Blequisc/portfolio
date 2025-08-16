import React from "react";
import { useTranslation } from "react-i18next";

import LangValue from "../utils/i18n/i18n"; // Adjust the import path as necessary

import "flag-icons/css/flag-icons.min.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Header: React.FC = () => {
  return (
    <div>
      <header className="bg-[#dfdfdf] w-6xl h-15 rounded-lg border-3 border-[#c8c8c8] ">
        <div className="h-auto w-auto flex items-center justify-between align-center p-2">
          <div className="">
            {/*//TODO: Add "Gustavo" as in a logo */}
            Esquerda
          </div>

          <div>
            {/* //TODO: Add navbar (Github, About, ?) */}
            {/* Meio */}
            {LangValue}
          </div>
            
          <div className="flex items-center justify-between gap-4">
            {/*//TODO: Add language and buy me a coffe button */}


            <select name="Language" id="">
              <option value="1"><span className="fi fi-br">br</span></option>
              <option value="2"><span className="fi fi-us"></span></option>
              <option value="3">3</option>
            </select>

            <button className="flex items-center justify-center bg-[#c8c8c8] rounded-lg p-2">
              {/* //TODO: Add current language to display, list possible languages (En, Pt-BR) */}
              <span className="fi fi-br"></span>
              <ChevronDownIcon className="h-5" />
            </button>

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
