import React, { useState } from 'react'

export default function Post(props) {

  const [counter, setCounter] = useState(0);

  const handleCount = ()=>{
    setCounter(counter+1);
  }

  return (
    <div>
      {props.render(counter,handleCount)}
    </div>
  )
}
