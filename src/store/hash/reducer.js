export const abc = (state = null, action) => {
  console.log('hash' + action.type);
  switch (action.type) {
    case 'changeHash':
      return action.hash
    default:
      return state
  }
}

let defaultState = {
  orderSum: '', //金额
  name: '', //姓名
  phoneNo: '', //手机号
  imgpath: '', //图片地址
}
// 首页表单数据
export const formData = (state = defaultState , action = {}) => {
  switch(action.type){
    case 'sdfsdfdfs':
      return {...state, ...{[action.datatype]: action.value}};
    case 'sdfsdf':
      return {...state, ...{imgpath: action.path}};
    default:
      return state;
  }
}


