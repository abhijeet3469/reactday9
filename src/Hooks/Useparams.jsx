import React from 'react'
import { useParams } from 'react-router-dom'

export default function Useparams() {
    const {name, id} = useParams()
  return (
    <h1>Book {name} {id}</h1>
  )
}
