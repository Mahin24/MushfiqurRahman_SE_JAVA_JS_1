import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

// import './assets/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/sb-admin-2.min.css';
import './assets/scss/custom/main.scss';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import App from "./routers/App";

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>,document.getElementById('root')
);
