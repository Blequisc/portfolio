import React from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import i18n from "i18next";
import { ReactTyped } from "react-typed";

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
    <div className="">
      <header className="bg-[#f2f2f2] border-[#c8c8c8] rounded border-1 fixed z-100 h-15 w-7xl m-4 top-0 left-0 right-0 mx-auto">
        <div className="h-full flex justify-between items-center px-4">
          <div className="w-xs flex align-left">
            {/* // // TODO: Add "Gustavo" as in a logo; Maybe make it write itself, then delete and write "Bléqui", delete again and repeat
            // // TODO: Find a lib that has a writing text animation  */}
            {/* Esquerda */}

            <ReactTyped
              className="text-2xl font-bold font-mono antialiased pl-2"
              strings={["Gustavo", "Bléqui"]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={2000}
              loop
            />
          </div>

          <div className="">
            {/* // // TODO: Add navbar (Github, About, ?) */}
            {/* Meio */}
            <nav className="flex gap-4">
              <a href="#">{t("about")}</a>
              <a href="#">{t("projects")}</a>
              <a href="#">{t("contact")}</a>
            </nav>
          </div>

          <div className="w-xs flex align-right justify-end gap-4">
            {/* // // TODO: Add current language to display, list possible languages (En, Pt-BR) */}
            {/* Direita */}
            <Select
              styles={{
                // For the divider between arrow and current option
                indicatorSeparator: (styles) => ({
                  ...styles,
                  display: "none",
                }),
                // For the main control
                control: (styles) => ({
                  ...styles,
                  width: "auto",
                  border: "none",
                  boxShadow: "none",
                  cursor: "pointer",
                }),
                // For the dropdown arrow
                dropdownIndicator: (styles) => ({
                  ...styles,
                  padding: "4px 4px 4px 0px",
                }),
                // For the current selection
                input: (styles) => ({
                  ...styles,
                  padding: "4px 0px 4px 4px",
                }),
              }}
              //TODO: try to understand what the hell this does (thanks copilot ☺)
              options={options}
              defaultValue={options.find(
                (option) => option.value === i18n.language
              )}
              onChange={(selectedOption) => {
                if (selectedOption) {
                  i18n.changeLanguage(selectedOption.value);
                }
              }}
            />

            {/* //TODO: Look for alternates (Image seems to have low quality) */}
            <a href="https://ko-fi.com/Z8Z51JSWBK" target="_blank">
              <img
                className="w-36"
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
