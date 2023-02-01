# react-modal-emmanuellets

> react simple modal

[![NPM](https://img.shields.io/npm/v/react-modal-emmanuellets.svg)](https://www.npmjs.com/package/react-modal-emmanuellets) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-modal-emmanuellets
```

## Usage

```tsx
import React from 'react'
import Modal from 'react-modal-emmanuellets'

type AppProps = {
  className: string
  btnTexte: string
}

const Exemple = ({ className, btnTexte }: AppProps) => {
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
        Texte exemple!
      </Modal>
    </div>
  )
}
```

##API

| Name            | Type                             | Default    | Description      |
| --------------- | -------------------------------- | ---------- | ---------------- |
| show            | boolean                          | false      | Opens the modal. |
| onClickCloseBtn | React.MouseEventHandler<Element> | false void | Close the modal. |

## License

MIT © [neverswood](https://github.com/neverswood)
