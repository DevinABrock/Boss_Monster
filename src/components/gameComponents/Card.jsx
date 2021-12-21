
import React from 'react'
import { useDispatch } from 'react-redux'
import { selectCard } from '../../actions/sampleActions'

function Card({cardObj, className}) {

  const dispatch = useDispatch()

  return (
    <img src={cardObj.image} className={className} onClick={()=>dispatch(selectCard(cardObj, className))}/>
  )
}

export default Card
