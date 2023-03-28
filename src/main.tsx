import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './app/store';
import queryClient from './configs/reactQuery';

// If you use redux, don't use react-query

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
