import React from "react";

const Modal = ({ closeModal, children, smallSize}) => {
    return (
        <>
            <div id="myModal" className="Modal">
                <div
                    className="modal-content"
                    id={smallSize ? "small_size" : "full_size"}
                >
                    <span className="close" role="button" onClick={closeModal}>
                        &times;
                    </span>
                    <p>{children}</p>
                </div>
            </div>
        </>
    )
}

export default Modal;