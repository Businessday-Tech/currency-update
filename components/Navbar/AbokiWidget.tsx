import React from 'react'

const AbokiWidget = () => {
  return (
    <div className=" w-full bg-black overflow-x-hidden overscroll-none">
    <iframe src="https://abokifx.com/tickers" className=" w-full !overflow-hidden overscroll-none" height={100}></iframe>
    </div>
  )
}

export default AbokiWidget