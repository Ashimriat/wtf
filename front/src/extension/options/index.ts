import { createElement } from 'react';
import { render } from 'react-dom';
import App from './OptionsApp';


const appContainer = document.getElementById('app');
render(createElement(App), appContainer);
