import React from 'react'
import ReactDOM from 'react-dom'

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Priyanka Chopra"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_TJ0AqGjaxsrjIGwn0ZKgBPsSeZ1SMj0fw&usqp=CAU"
      tel="+1-912-8520-323"
      email="@purplepebblepictures.com"
    />
  </div>,
  document.getElementById('root')
)
