import React from 'react'

const Props = ({ name, age ,phone,country}) => {
  return (
      <div>
          
          <h1>{name}</h1>
          <h1>{age}</h1>
          <h1>{ phone}</h1>
    </div>
  )
}

export default Props