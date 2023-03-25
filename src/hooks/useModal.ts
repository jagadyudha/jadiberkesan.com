import React, { useRef } from 'react';

const useModal = () => {
  const [state, setState] = React.useState(false);
  const close = () => setState(false);
  const open = () => setState(true);
  const toggle = () => setState(!state);

  return {
    state,
    setState,
    close,
    open,
    toggle,
  };
};

export default useModal;
