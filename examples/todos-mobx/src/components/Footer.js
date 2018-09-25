import React from 'react'
import { inject, observer } from 'mobx-react';

@inject('visibleFilterStore')
@observer
class Footer extends React.Component {
  render () {
    const arr = ['All', 'Active', 'Completed']
    const { visibleFilterStore } = this.props
    return (
      <div>
        show: 
        {arr.map(item => {
          return <button key={item} onClick={() => visibleFilterStore.setVisibleFilter(item)}>{item}</button>
        })}
      </div>
    )
  }
}

export default Footer
