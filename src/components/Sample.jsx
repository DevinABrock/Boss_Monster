
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { sampleAction } from "../actions/sampleActions"

function Sample() {
  
  const count = useSelector(state=>state.sampleCR.count)

  const dispatch = useDispatch()

  // componentDidMount if dependency list is empty
  useEffect(() => {
    
    // componentDidMount - used as cleanup function
    // return () => {
    //   cleanup
    // }
  }, [])

  return (
    <>
      <h1>Redux Template</h1>

      <h3>{count}</h3>

      <button onClick={()=>dispatch(sampleAction(4))}>Click to update global state</button>
    </>
  )
}

export default Sample
