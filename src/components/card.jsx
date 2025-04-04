import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className='body'>
        <div className="image"><img src="" alt="" /></div>
        <br />
        <div className=' id_name'>{props.id}</div>
        <br />
        <div className='title'>{props.title}</div>
        <br />
        <div className='content'>{props.body}</div>
    </div>
  )
}

export default Card