import React from 'react'

const backdropStyles: React.CSSProperties = {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
}

const Backdrop = ({ onClick }: { onClick: React.MouseEventHandler }) => {
  return <div onClick={onClick} style={backdropStyles} />
}

export default Backdrop
