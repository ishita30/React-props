import React from 'react'
import Avatar from './Avatar'

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom"></div>
      <Detail detailInfo={props.tell} />
      <Detail detailInfo={props.email} />
    </div>
  )
}

export default Card
