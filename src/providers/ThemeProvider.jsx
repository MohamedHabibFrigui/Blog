"use client";

import { Themecontext } from "@/context/ThemeContext";
import { useContext } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(Themecontext);
  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
