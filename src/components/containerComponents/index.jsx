import React, { useState } from "react";
import ThemeContext from "../shared/Contexts";
import DefaultContext from "../shared/Contexts/DefaultContext";
import NameList from "../nameList";
import Modal from "../shared/modal";
import { data } from "../shared/Datas";

const Container = () => {
  const [names, setNames] = useState(data);
  const [defaultNames, setDefaultNames] = useState(data);

  const value = {
    names: names,
    setNames: setNames,
  }

  const defaultValue = {
    defaultNames: defaultNames,
    setDefaultNames: setDefaultNames,
  }

  return (
    <ThemeContext.Provider value={value}>
      <DefaultContext.Provider value={defaultValue}>
        <div><Modal /></div>
        <div><NameList /></div>
      </DefaultContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Container;
