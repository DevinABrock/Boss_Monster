
import React from 'react'
import { useDispatch } from 'react-redux'
import { selectDungeonCard } from '../../actions/miscActions'

function DungeonCard({cardArr, className}) {

  const dispatch = useDispatch()

  return (
    <>
      <img id={cardArr[0].id} src={cardArr[0].image} className={className} alt={cardArr[0].subtitle} name={cardArr[0].name} onClick={()=>dispatch(selectDungeonCard(cardArr, className, cardArr[0].id))}/>
    </>
  )
}

export default DungeonCard
