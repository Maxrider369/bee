import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { IonReactRouter } from '@ionic/react-router';
import { setupIonicReact } from '@ionic/react';

/* Ionic CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact();
defineCustomElements(window);

ReactDOM.createRoot(document.getElementById('root')).render(
  <IonReactRouter>
    <App />
  </IonReactRouter>
);
