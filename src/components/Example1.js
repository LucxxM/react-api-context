import React, { useState, createContext, useContext } from "react";
import { ThemeContext, Themes } from "./ThemeContextProvider";

const ParentContext = createContext(null);

export const ParentEx1 = () => {
  const [userName, setUserName] = useState("Luc");
  const { currentTheme } = useContext(ThemeContext);

  return (
    <ParentContext.Provider value={{ userName, setUserName }}>
      {/* {currentTheme === Themes.Light ? 
      <div style={{ backgroundColor: "white", padding: "2em"}}>
        {userName}
        <Child />
      </div>
      :
      <div style={{ backgroundColor: "gray", padding: "2em"}}>
        {userName}
        <Child />
      </div>
      } */}
      <div style={currentTheme === Themes.Light ? {backgroundColor: "white", padding: "2em"} : {backgroundColor: "gray", padding: "2em"}}>
      <span style={currentTheme === Themes.Light ? {color: "black"} : {color: "white"}}>{userName}</span>
        <Child />
      </div>
    </ParentContext.Provider>
  );
};

export const Child = () => {
  return <Grandchild />;
};

export const Grandchild = () => {
  const { setUserName } = useContext(ParentContext);
  const { userName } = useContext(ParentContext);
  const { setCurrentTheme } = useContext(ThemeContext);
  const { currentTheme } = useContext(ThemeContext);
  return (
    <div>
      <button
        onClick={() => {
          userName === "Luc" ? setUserName("LucxxM") : setUserName("Luc");
        }}
      >
       <span style={currentTheme === Themes.Light ? {color: "black"} : {color: "white"}}>Toggle le nom</span>
      </button>
      <span style={currentTheme === Themes.Light ? {color: "black"} : {color: "white"}}>{currentTheme}</span>
      <button
        onClick={() => {
          currentTheme === Themes.Light ? setCurrentTheme(Themes.Dark) : setCurrentTheme(Themes.Light);
        }}
      >
        <span style={currentTheme === Themes.Light ? {color: "black"} : {color: "white"}}>Toggle le theme</span>
      </button>
    </div>
  );
};
