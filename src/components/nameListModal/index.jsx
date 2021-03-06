import React, { useEffect, useState, useContext } from "react";
import namesListContext from "../shared/Contexts";
import DefaultContext from "../shared/Contexts/DefaultContext";
import Input from "../shared/input";
import ModalButtons from "../modalPageButtons";

import "./index.scss";

const NameListModal = ({ setShowModal }) => {
    const [inputSelected, setInputSelected] = useState([]);
    const { names, setNames } = useContext(namesListContext);
    const { defaultNames, setDefaultNames } = useContext(DefaultContext);

    useEffect(() => {
        setInputSelected([...names]);
    }, []);

    const inputCheckboxClick = (key) => {
        inputSelected.map(item => {
            if (item.key === key) {
                item.selected = !item.selected;
            };
        });
        setInputSelected([...inputSelected]);
    };

    const onClickApply = () => {
        setNames([...inputSelected]);
        onClickApplyHelper();
        setShowModal(false);
    };

    const onClickApplyHelper = () => {
        for (let index = 0; index < defaultNames.length; index++) {
            inputSelected.find((element) => {
                const isEqual = (element.key === defaultNames[index].key);
                if (isEqual) defaultNames[index].selected = element.selected;
            });
        };
        setDefaultNames([...defaultNames]);
    };

    const onClickCancel = () => {
        onClickCancelHelper();
        setShowModal(false);
    };

    const onClickCancelHelper = () => {
        for (let index = 0; index < defaultNames.length; index++) {
            inputSelected.find((element) => {
                const isEqual = (element.key === defaultNames[index].key);
                if (isEqual) element.selected = defaultNames[index].selected;
            });
        };
        setInputSelected([...inputSelected]);
    };

    return (
        <div>
            <ul className="namesList">
                {inputSelected.length > 0 && inputSelected.map((human, index) => <div className="nameItemDiv" key={index} ><li className="nameItem">{human.name}</li><div><Input type="checkbox" isChecked={human.selected} className="checkboxInputs" onClick={() => inputCheckboxClick(human.key)} /></div></div>)}
            </ul>
            <ModalButtons onClickApply={onClickApply} onClickCancel={onClickCancel} />
        </div>
    );
};

export default NameListModal;
