import { LIST } from './actionType';

const defaultState = {
  list: [],
};

/*
  @state=defaultState:默认store定义值
  @action:通过dispatch需要改变得值
  @CHANGE_INPUT: input框change事件，改变得value与inputVal绑定
  @ADD_ITEM: 点击提交按钮，将inputVal放入li中
  @DEL_ITEM: 点击哪个li删除哪个
*/

export default (state: any = defaultState, action: any) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case LIST:
      newState.list = action.value;
      //   console.log(newState.list);
      break;
    default:
      return state;
  }
  return newState;
};
