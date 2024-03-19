import React from 'react'

export default function Homeitems(props) {
    const item = props.item
  return (
    <div>
        <div>{item.userId}</div>
        <div>{item.title}</div>
        <div>{item.body}</div>
    </div>
  )
}
