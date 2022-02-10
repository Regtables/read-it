import Button  from '../Button/Button'
import React from 'react'

import './Filters.css'

function Filters({terms}) {

  const width = terms.length*110

  

  return (
    <div className = 'filters-container' style = {{width: width}}>
      {terms.map((term, index) => (
        index === 0 
        ?  <Button 
              className = 'filter' 
              text = {term} 
              size = {8} 
              key = {index}
              style = {marginLeft = '0'}
          />
        :  <Button 
        className = 'filter' 
        text = {term} 
        size = {8} 
        key = {index}
    
          />
      ))}
    </div>
  )
}

export default Filters
