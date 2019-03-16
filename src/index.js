import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import './css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
// 配置redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from  "react-redux";
// 导出reducers
import reducers from "./reducers";
// 导出自定义中间件
import { logger } from "./middleware";
// 创建store
const store = createStore(reducers, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
