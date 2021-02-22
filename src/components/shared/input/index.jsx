import React from "react";

const Input = ({ type, isChecked, className, onClick }) => {
    return (
        <input type={type} checked={isChecked} className={className} onClick={onClick} />
    );
};

export default Input;
