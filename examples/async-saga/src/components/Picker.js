import React from 'react'

const Picker = ({ onChange, selectedType, types }) => {
  return (
    <div>
      <h2>{selectedType}</h2>
      <select onChange={(e) => onChange(e.target.value)}>
        {types.map(item => {
          return <option key={item} value={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default Picker