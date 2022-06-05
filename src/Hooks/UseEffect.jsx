import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [select, setSelect] = useState('posts');
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${select}/1`)
        .then(response => response.json())
        .then(json => setData(json))
    
    }, [select])
    
   





    // console.log('render');
    // useEffect(()=>{console.log('mounted');}, [select])


  return (
      <div className='container'>

      <h2>{count}</h2>
      <h1>{select}</h1>
      
      <button className='btn btn-dark' onClick={()=>{setCount(count+1)}}>Count➡️</button>
      <div className='container2 mt-3 mb-4'>
      <button className='btn btn-primary' onClick={()=>{setSelect('comments')}}>Comment</button>
      <button className='btn btn-danger' onClick={()=>{setSelect('posts')}}>Posts</button>
      <button className='btn btn-warning' onClick={()=>{setSelect('users')}}>Users</button>
      </div>
      {JSON.stringify(data)}
</div>
  )
}
