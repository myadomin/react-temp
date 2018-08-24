import { createSelector } from 'reselect'

const getVisibilityFilter = state => state.visibleFilter
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  // visibleFilter, todos是以上getVisibleTodos, getTodos两个函数的执行结果
  // state.visibleFilter state.todos有变化才会执行下面的数据处理函数
  (visibleFilter, todos) => {
    switch (visibleFilter) {
      case 'SHOWALL':
        return todos
      case 'SHOWACTIVE':
        return todos.filter(t => t.completed)
      case 'SHOWCOMPLETED':
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + visibleFilter)
    }
  }
)

// selector函数 
// 当切换showall等按钮的时候并没有变化state.todos 
// 所以不会执行下面的函数 相当于缓存了getCompletedTodoCount
export const getCompletedTodoCount = createSelector(
  [getTodos],
  // state.todos有变化才会执行下面的数据处理函数
  todos => {
    console.log('createSelector -- getCompletedTodoCount')
    return todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )
  }
)

// render重新触发的三个条件 1首次加载 2props变化 3state变化
// Footer组件中 当点击showall等按钮的时候 active filterClick 变化 所以会重新render然后执行下面的函数
// 而此时todos并没有变化 不需要重新计算completedTodoCount 所以用上面的selector函数 
// export const getCompletedTodoCount = (state) => {
//   const { todos } = state
//   console.log('普通 -- getCompletedTodoCount')
//   return todos.reduce((count, todo) =>
//     todo.completed ? count + 1 : count,
//     0
//   )
// }

// const mySelector = createSelector(
//   state => state.values.value1,
//   state => state.values.value2,
//   (value1, value2) => value1 + value2
// )

// // You can also pass an array of selectors
// const totalSelector = createSelector(
//   [
//     state => state.values.value1,
//     state => state.values.value2
//   ],
//   (value1, value2) => value1 + value2
// )
