import React, { Fragment } from 'react'
import Backdrop from './backdrop'

const wrapperStyles: React.CSSProperties = {
  width: '100%',
  position: 'fixed',
  zIndex: 1,
  left: 0,
  top: 0,
  height: '100%',
  backgroundColor: 'rgba(26, 39, 156, 0.4)'
}

const modalStyles: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '500px',
  width: '100%',
  border: '2px solid rgb(133, 133, 133)',
  borderRadius: '5px',
  backgroundColor: 'white',
  zIndex: 1,
  padding: '10px',
  minHeight: '50px'
}

const closeBtnStyles: React.CSSProperties = {
  position: 'absolute',
  right: '5px',
  top: '5px',
  background: 'none',
  border: 'none',
  fontWeight: 'bold',
  fontSize: '20px',
  cursor: 'pointer'
}

type ModalProps = {
  show: boolean
  onClickCloseBtn: React.MouseEventHandler
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ children, show, onClickCloseBtn }) => {
  return (
    <Fragment>
      {show && (
        <div style={wrapperStyles}>
          <Backdrop onClick={onClickCloseBtn} />
          <div style={modalStyles}>
            <button onClick={onClickCloseBtn} style={closeBtnStyles}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Modal
