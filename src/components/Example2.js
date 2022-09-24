import React, { useState, createContext, useContext } from "react";

const TestContext = createContext(null);

export const ParentEx2 = () => {
  const [userName, setUserName] = useState("Luc");

  return (
    <TestContext.Provider value={{ userName, setUserName }}>
      <Child1 />
      <Child2 />
    </TestContext.Provider>
  );
};

export const Child1 = () => {
  const { userName } = useContext(TestContext);

  return <h3 style={{textAlign: "center"}}> {userName} </h3>;
};

export const Child2 = () => {
  const { setUserName } = useContext(TestContext);
  const { userName } = useContext(TestContext);
  return (
    <div style={{backgroundColor: "lightBlue", padding: "2em"}}>
      <button
        onClick={() => {
          userName === "Luc" ? setUserName("LucxxM") : setUserName("Luc");
        }}
      >
        Toggle le nom
      </button>
    </div>
  );
};
