import React from 'react';
import ReactDOM from 'react-dom';

// Custom Imports
import './styles/Styles.scss';
import Logo from "./logo.svg"
import {
  AppContent,
  Header,
  Footer,
} from './components/index/imports.js';

// Language wrapper
import { IntlProviderWrapper } from "./utils/language_helpers/IntlProviderWrapper.jsx";

const DEFAULT_APP_NAME_ID = "app.name.id";
const DEFAULT_APP_NAME = "Video Converter";

ReactDOM.render(
  <IntlProviderWrapper>

    <React.StrictMode>
      <Header
        title={DEFAULT_APP_NAME_ID}
        defaultTitle={DEFAULT_APP_NAME}
        logo={Logo}
      />

      <AppContent />

      <Footer title={DEFAULT_APP_NAME_ID} defaultTitle={DEFAULT_APP_NAME} />
    </React.StrictMode>

  </IntlProviderWrapper>,
  document.getElementById("root")
);
