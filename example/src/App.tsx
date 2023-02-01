import React, { useState } from 'react'
import Modal from 'react-modal-emmanuellets'

const btnStyles = {
  width: '200px',
  display: 'block',
  margin: '0 auto',
  padding: '10px',
  background: 'none',
  border: 'none',
  backgroundColor: '#eee',
  fontSize: '20px',
  cursor: 'pointer'
}

type AppProps = {
  className: string
  btnTexte: string
}

const App = ({ className, btnTexte }: AppProps) => {
  const [showModal, setShowModal] = useState(false)
  const hideModal = () => showModal && setShowModal(false)
  return (
    <div className={className}>
      <button
        style={btnStyles}
        className={className}
        onClick={() => setShowModal(true)}
      >
        {btnTexte}
      </button>
      <Modal show={showModal} onClickCloseBtn={hideModal}>
        Texte
      </Modal>
    </div>
  )
}

export default App
