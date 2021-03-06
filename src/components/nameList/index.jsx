import React, { useContext, useEffect, useState } from "react";
import Button from "../shared/button";
import ThemeContext from "../shared/Contexts";

import "./index.scss";

const NameList = () => {
    const context = useContext(ThemeContext);
    const [names, setNames] = useState([]);

    useEffect(() => {
        setNames(context.names);
    }, []);

    const removeItem = (index) => {
        names.splice(index, 1);
        context.setNames([...names]);
        setNames([...names]);
    };

    return (
        <ul className="namesList">
            {names.length > 0 && names.map((human, index) => human.selected && <div key={index} className="nameItemDiv"><li className="nameItem" >{human.name}</li><div className="closeButton"><Button value="X" onClick={() => removeItem(index)} /></div></div>)}
        </ul>
    );
};

export default NameList;
