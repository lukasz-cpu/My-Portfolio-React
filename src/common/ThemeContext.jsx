import React, {createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export useTheme() = () => useContext(ThemeContext); 