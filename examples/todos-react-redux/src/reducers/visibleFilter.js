import { SET_VISIBLE_FILTER } from '../types'

const visibleFilter = (state = 'SHOWALL', action) => {
  switch (action.type) {
    case SET_VISIBLE_FILTER:
      return action.filterType
    default:
      return 'SHOWALL'
  }
}

export default visibleFilter