import axios from '@src/utils/axios'

export const incrementCount = (num) => {
  // redux-thunk
  return (dispatch, getState) => {
    // axios.get(urls.getStaffPrivileges).then(res => {
    dispatch({
      type: 'incrementCount',
      num: num
    })
    // })
  }
}
