import React from 'react'

const AbokiWidget = () => {
  return (
    <div className=" w-full bg-black overflow-x-hidden overscroll-none">
    <iframe src="https://abokifx.com/tickers" marginWidth={0} marginHeight={0} width={250000} scrolling='no' frameBorder={0} className=" !overflow-hidden overscroll-none" height={70}></iframe>
    </div>
  )
}

export default AbokiWidget