import React from 'react'
import ManhwaCard from './ManhwaCard'

const ManhwaList = ({data}) => {
    console.log(data);
  return (
    <>
    {
        data.map((item, index) => (
            <ManhwaCard item={item} key={index} />
        ))
    }
    </>
  )
}

export default ManhwaList