import React, { useState } from "react";
import './Modal.css'

export interface ModalType {
    children?: React.ReactNode,
    isOpen: boolean,
    hiddenModal: () => void,
    removeAndHiddenFormContent: () => void
}

const Modal: React.FC<ModalType> = ({ hiddenModal, removeAndHiddenFormContent }) => {

    return (
        <div className="modal dialog" >
            <div className="modal-body">
                <h1>
                    내용이 사라집니다.
                    <br></br>
                    정말 삭제하시겠습니까?
                </h1>
                <div className='modal-footer'>
                    <button className='modal-btn btn medium tertiary' onClick={hiddenModal}>아니요</button>
                    <button className='modal-btn btn medium secondary' onClick={removeAndHiddenFormContent}>예</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;