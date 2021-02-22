import React from "react";
import Button from "../shared/button";

const ModalButtons = ({ onClickApply, onClickCancel }) => {
    return (
        <div className="modalPageButtonsContainer">
            <div className="modalPageButtons" ><Button value="Apply" onClick={onClickApply} /></div>
            <div className="modalPageButtons" ><Button value="Cancel" onClick={onClickCancel} /></div>
        </div>
    );
};

export default ModalButtons;
