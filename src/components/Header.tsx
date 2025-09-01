import React from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import i18n from "i18next";
import { ReactTyped } from "react-typed";
import { ShimmerButton } from "./magicui/shimmer-button";

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
      <header className="bg-[#141414] border-[#101010] rounded border-1 fixed z-100 h-15 w-7xl m-4 top-0 left-0 right-0 mx-auto">
        <div className="h-full flex justify-between items-center px-4 text-white">
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
            <nav className="flex gap-4 text-lg">
              <a href="#About">{t("about")}</a>
              <a href="#Projects">{t("projects")}</a>
              <a href="#Contact">{t("contact")}</a>
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
                  backgroundColor: "rgba(0, 0, 0, 1)",
                }),
                // For the dropdown arrow
                dropdownIndicator: (styles) => ({
                  ...styles,
                  padding: "4px 4px 4px 0px",
                  color: "white",
                }),
                // For the current selection
                input: (styles) => ({
                  ...styles,
                  padding: "4px 0px 4px 4px",
                }),
                // Make the list dark and when hovering an option, make it a bit lighter, also remove the highlight on selected option
                option: (styles, { isFocused, isSelected }) => ({
                  ...styles,
                  backgroundColor: isFocused ? "rgba(21, 21, 21, 1)" : "rgba(0, 0, 0, 1)",
                  color: "white",
                  cursor: "pointer",
                  "&:active": {
                    backgroundColor: "rgba(0, 0, 0, 1)",
                  },
                  // Remove highlight on selected option
                  fontWeight: isSelected ? "normal" : "normal",
                }),
                // For the dropdown menu
                menu: (styles) => ({
                  ...styles,
                  backgroundColor: "rgba(0, 0, 0, 1)",
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
            {/* <a href="https://livepix.gg/blequi" target="_blank" rel="noreferrer">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  livepix.gg/blequi
                </span>
              </ShimmerButton>
            </a> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
