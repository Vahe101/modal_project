import React, { useEffect, useState, useContext } from "react";
import ThemeContext from "../shared/Contexts";
import DefaultContext from "../shared/Contexts/DefaultContext";
import Input from "../shared/input";
import ModalButtons from "../modalPageButtons";

import "./index.scss";

const NameListModal = ({ setShowModal }) => {
    const [inputVisible, setInputVisible] = useState([]);
    const { names, setNames } = useContext(ThemeContext);
    const { defaultNames, setDefaultNames } = useContext(DefaultContext);

    useEffect(() => {
        if (inputVisible.length === 0) {
            setInputVisible([...names]);
        };
    }, []);

    const inputCheckboxClick = (key) => {
        inputVisible.map(item => {
            if (item.key === key) {
                item.visible = !item.visible;
            };
        });
        setInputVisible([...inputVisible]);
    };

    const onClickApply = () => {
        setNames([...inputVisible]);
        onClickApplyHelper();
        setShowModal(false);
    };

    const onClickApplyHelper = () => {
        for (let index = 0; index < defaultNames.length; index++) {
            inputVisible.map(item => {
                if (item.key === defaultNames[index].key) {
                    defaultNames[index].visible = item.visible;
                };
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
            inputVisible.map(item => {
                if (item.key === defaultNames[index].key) {
                    item.visible = defaultNames[index].visible;
                };
            });
        };
        setInputVisible([...inputVisible]);
    };

    return (
        <div>
            <ul className="namesList">
                {inputVisible.length > 0 && inputVisible.map((human, index) => <div className="nameItemDiv" key={index} ><li className="nameItem">{human.name}</li><div><Input type="checkbox" isChecked={human.visible} className="checkboxInputs" onClick={() => inputCheckboxClick(human.key)} /></div></div>)}
            </ul>
            <ModalButtons onClickApply={onClickApply} onClickCancel={onClickCancel} />
        </div>
    );
};

export default NameListModal;
