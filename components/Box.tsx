"use client";
import { IPriceData } from '@/bday'
import React, { useEffect } from 'react'

interface Props{
    data:IPriceData
}

const Box = ({data}:Props) => {

    useEffect(() => {
      console.log({data})
    
    }, [data])
    
  return (
    <div></div>
  )
}

export default Box