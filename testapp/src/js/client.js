import React from "react";
import ReactDOM from "react-dom";
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import App from "./components/App";

const app = document.getElementById('app');
ReactDOM.render(<LocaleProvider locale={enUS}><App/></LocaleProvider>, app);
