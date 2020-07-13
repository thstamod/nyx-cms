export const defaultStyle = {
  transition: 'all 300ms ease-in-out',
  opacity: 0,
  maxHeight: 0,
};

export const transitionStyles = {
  entering: { opacity: 1, maxHeight: '100%' },
  entered: { opacity: 1, maxHeight: '100%' },
  exiting: { opacity: 0, maxHeight: 0 },
  exited: { opacity: 0, maxHeight: 0 },
};
