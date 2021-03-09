import React from 'react'

// We can destructure right at the top which saves us passing props then destructuring
const Card = ({ id, name, email }) => {

  return (
    // Everything goes in the div as we can only return one element
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200'`} alt={`${name}`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card