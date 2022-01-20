import Button  from '../Button/Button'
import React from 'react'

import './Filters.css'

function Filters({terms}) {

  const width = terms.length*140

  return (
    <div className = 'filters-container' style = {{width: width}}>
      {terms.map((term, index) => (
        <Button 
            className = 'filter' 
            text = {term} 
            size = {8} 
            key = {index}
            style = {index === 0 && {marginLeft: '0'}}
        />
      ))}
    </div>
  )
}

export default Filters
