import React, { useState, createContext, useContext } from "react";

const AppContext = createContext(null);

export const Parent = () => {
  const [userName, setUserName] = useState("Luc");
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider value={{ userName, setUserName, count, setCount }}>
      <Child1 />
      <Child2 />
      <Child3 />
      <Child4 />
    </AppContext.Provider>
  );
};

export const Child1 = () => {
  const { userName } = useContext(AppContext);

  return <h2> {userName} </h2>;
};

export const Child2 = () => {
  const { setUserName } = useContext(AppContext);
  const { userName } = useContext(AppContext);
  const { setCount } = useContext(AppContext);
  return (
    <div style={{backgroundColor: "cyan", padding: "2em"}}>
      <button
        onClick={() => {
          userName === "Luc" ? setUserName("LucxxM") : setUserName("Luc");
        }}
      >
        Toggle le nom
      </button>

      <button
      onClick={() => {
        setCount((c) => c + 1)
      }}
      >
        +
      </button>
    </div>
  );
};

export const Child3 = () => {
  const { count } = useContext(AppContext);
  return <h1>{count}</h1>;
};

export const Child4 = () => {
  const { setCount } = useContext(AppContext);
  const { userName } = useContext(AppContext);
  return (
    <div style={{backgroundColor: "cyan", padding: "2em", marginBottom: "1em"}}>
      <div>
      {userName}
      </div>
        <button
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        +
      </button>
    
      <button
        onClick={() => {
          setCount(() => 0);
        }}
      >
        reset le compteur
      </button>
    </div>
  );
};
