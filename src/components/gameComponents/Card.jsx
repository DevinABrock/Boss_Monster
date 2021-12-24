
import React from 'react'
import { useDispatch } from 'react-redux'
import { selectCard } from '../../actions/miscActions'

function Card({cardObj, className}) {

  const dispatch = useDispatch()

  return (
    <>
      <img id={cardObj.id} src={cardObj.image} className={className} alt={cardObj.subtitle} name={cardObj.name} onClick={()=>dispatch(selectCard(cardObj, className, cardObj.id))}/>
    </>
  )
}

export default Card
