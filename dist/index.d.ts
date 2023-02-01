import React from 'react';
declare type ModalProps = {
    show: boolean;
    onClickCloseBtn: React.MouseEventHandler;
    children: React.ReactNode;
};
declare const Modal: React.FC<ModalProps>;
export default Modal;
