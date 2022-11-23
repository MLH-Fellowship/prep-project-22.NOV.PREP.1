import React from 'react'
import Carryitems from './Carryitems'

export default function CardData({results}) {
  return (
      <Carryitems  weatherKind={results && results.weather[0].main}/>
  )
}
