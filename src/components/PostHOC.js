import React, { useState } from 'react'

const PostHOC=(Post)=>{
  function PostHOC() {
    const [counter,setCounter]=useState(0)
    const handleCount=()=>{
      setCounter(counter+1)
    }
    return (
      <div>
        <Post counter={counter} handleCount={handleCount}/>
      </div>
    )
  }
  return PostHOC
}


export default PostHOC
