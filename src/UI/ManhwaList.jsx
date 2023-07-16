import React from 'react'
import ManhwaCard from './ManhwaCard'
import ManhwaWeeklyCard from './ManhwaWeeklyCard'

const ManhwaList = ({data, unTitle}) => {
  return (
    <>
    {
        unTitle ?
        data.map((item, index) => (
            <ManhwaWeeklyCard item={item} key={index} />
        ))
        :
        data.map((item, index) => (
            <ManhwaCard item={item} key={index} />
        ))
    }
    </>
  )
}

export default ManhwaList