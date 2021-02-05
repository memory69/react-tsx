import { createStore } from 'redux';
import reducer from './reducer';

//声明一下window的属性
declare const window: Window & { __REDUX_DEVTOOLS_EXTENSION__: any };
//创建store库
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
