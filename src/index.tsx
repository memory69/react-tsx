import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//redux
import store from './store';
import { Provider } from 'react-redux';

//引入antd样式
import 'antd/dist/antd.css';

//设置antd组件的语言包
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

ReactDOM.render(
  // <React.StrictMode>

  // </React.StrictMode>,
  <ConfigProvider locale={zhCN}>
    {/* 使用Provider组件将App主组件包裹住,这样内部组件都有Store提供的属性 */}
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
