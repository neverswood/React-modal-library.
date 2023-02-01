import React, { Fragment } from 'react';

var backdropStyles = {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};
var Backdrop = function Backdrop(_ref) {
  var onClick = _ref.onClick;
  return React.createElement("div", {
    onClick: onClick,
    style: backdropStyles
  });
};

var wrapperStyles = {
  width: '100%',
  position: 'fixed',
  zIndex: 1,
  left: 0,
  top: 0,
  height: '100%',
  backgroundColor: 'rgba(26, 39, 156, 0.4)'
};
var modalStyles = {
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
};
var closeBtnStyles = {
  position: 'absolute',
  right: '5px',
  top: '5px',
  background: 'none',
  border: 'none',
  fontWeight: 'bold',
  fontSize: '20px',
  cursor: 'pointer'
};
var Modal = function Modal(_ref) {
  var children = _ref.children,
    show = _ref.show,
    onClickCloseBtn = _ref.onClickCloseBtn;
  return React.createElement(Fragment, null, show && React.createElement("div", {
    style: wrapperStyles
  }, React.createElement(Backdrop, {
    onClick: onClickCloseBtn
  }), React.createElement("div", {
    style: modalStyles
  }, React.createElement("button", {
    onClick: onClickCloseBtn,
    style: closeBtnStyles
  }, "X"), children)));
};

export default Modal;
//# sourceMappingURL=index.modern.js.map
