import React, { useContext } from 'react';
import { render as rtlRender } from '@testing-library/react';
import useEnhancedReducer from '../../hooks/useEnhancedReducer';

function render(
  ui,
  initialState,
  reducer,
  Context,
  UContext,
  middlewares,
  { ...renderOptions } = {}
) {
  function Wrapper({ children }) {
    // eslint-disable-next-line no-unused-vars
    function useAppState() {
      return useContext(UContext);
    }

    const store = useEnhancedReducer(reducer, initialState, middlewares);

    return <UContext store={store}>{children}</UContext>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
