import React from 'react'
import user from '../images/user.png'

const ContactCard = (props) => {
    const { name, email} = props.contact;
  return (
    <div className='item'>
        <img className='ui avatar image' src= {user} alt='userImageNotFound' />
    <div className='content'>
      <div className='header'>{name}</div>
      <div>{email}</div>
    </div>
    <i className='trash alternate outline icon ui right floated' style={{color:'red', marginBottom:'20px'}}>

    </i>
  </div>
  )
}

export default ContactCard;
