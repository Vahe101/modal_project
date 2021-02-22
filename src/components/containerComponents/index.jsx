import React, { useEffect, useState } from "react";
import ThemeContext from "../shared/Contexts";
import DefaultContext from "../shared/Contexts/DefaultContext";
import NameList from "../nameList";
import Modal from "../shared/modal";

const Container = () => {
  const [names, setNames] = useState([{ key: 1, name: "Abgar", visible: true }, { key: 2, name: "Ashot", visible: true }, { key: 3, name: "Karen", visible: true }, { key: 4, name: "Petros", visible: true }, { key: 5, name: "Soxomon", visible: true }, { key: 6, name: "Abgar", visible: true }, { key: 7, name: "Ashot", visible: true }, { key: 8, name: "Karen", visible: true }, { key: 9, name: "Petros", visible: true }, { key: 10, name: "Soxomon", visible: true }, { key: 11, name: "Abgar", visible: true }, { key: 12, name: "Ashot", visible: true }, { key: 13, name: "Karen", visible: true }, { key: 14, name: "Petros", visible: true }, { key: 15, name: "Soxomon", visible: true }, { key: 16, name: "Abgar", visible: true }, { key: 17, name: "Ashot", visible: true }, { key: 18, name: "Karen", visible: true }, { key: 19, name: "Petros", visible: true }, { key: 20, name: "Soxomon", visible: true }]);
  const [defaultNames, setDefaultNames] = useState([{ key: 1, name: "Abgar", visible: true }, { key: 2, name: "Ashot", visible: true }, { key: 3, name: "Karen", visible: true }, { key: 4, name: "Petros", visible: true }, { key: 5, name: "Soxomon", visible: true }, { key: 6, name: "Abgar", visible: true }, { key: 7, name: "Ashot", visible: true }, { key: 8, name: "Karen", visible: true }, { key: 9, name: "Petros", visible: true }, { key: 10, name: "Soxomon", visible: true }, { key: 11, name: "Abgar", visible: true }, { key: 12, name: "Ashot", visible: true }, { key: 13, name: "Karen", visible: true }, { key: 14, name: "Petros", visible: true }, { key: 15, name: "Soxomon", visible: true }, { key: 16, name: "Abgar", visible: true }, { key: 17, name: "Ashot", visible: true }, { key: 18, name: "Karen", visible: true }, { key: 19, name: "Petros", visible: true }, { key: 20, name: "Soxomon", visible: true }]);

  const value = {
    names: names,
    setNames: setNames,
  }

  const defaultValue = {
    defaultNames: defaultNames,
    setDefaultNames: setDefaultNames,
  }

  // useEffect(() => {
  //   if (defaultNames.length === 0) {
  //     setDefaultNames([...names]);
  //   };
  // }, []);

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
