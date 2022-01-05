
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCard } from '../../actions/miscActions'

function Card({cardObj, className}) {

  const dispatch = useDispatch()
  const swapRoomsMode = useSelector(state => state.playerStats.swapRoomsMode)

  const handleCardClick = () => {
    if(!swapRoomsMode){
      dispatch(selectCard(cardObj, className, cardObj.id))
    }
    else if(swapRoomsMode && className !== "room"){
      alert("You can only swap card in your dungeon.")
    }
  }

  return (
    <>
      <img id={cardObj.id} src={cardObj.image} className={className} alt={cardObj.subtitle} name={cardObj.name} onClick={()=>handleCardClick()}/><br></br>
    </>
  )
}

export default Card
