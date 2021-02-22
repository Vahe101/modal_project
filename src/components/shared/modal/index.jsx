import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import Button from "../../shared/button";
import NameListModal from "../../nameListModal";

import "./index.scss";

const Modal = () => {
    const [showModal, setShowModal] = useState();
    const [modalStyle, setModalStyle] = useState();

    useEffect(() => {
        setModalStyle(getModalStyle());
    }, []);

    const getModalStyle = () => ({
        overlay: {
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            padding: "0",
            backgroundColor: "rgba(20, 20, 20, 0.9)",
        },
        content: {
            height: "auto",
            margin: "100px auto",
        },
    });

    const onRequestClose = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className="addButton"><Button onClick={() => setShowModal(true)} value="Add" /></div>
            <ReactModal
                isOpen={showModal}
                contentLabel={"PodoModal"}
                shouldCloseOnOverlayClick={false}
                onRequestClose={onRequestClose}
                style={modalStyle}
            >
                <NameListModal setShowModal={setShowModal} />
            </ReactModal>
        </div>
    );
};

export default Modal;
