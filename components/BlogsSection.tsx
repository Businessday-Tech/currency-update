import React from 'react'
import MixBlock from './MixBlock'
import { IPostWithImage } from '@/bday'

interface Props{
    data:IPostWithImage[]
}
const BlogsSection = ({data}:Props) => {
  return (
      <div className=" mt-10">
      <MixBlock title="Market News" separator mobile data={data}/>        
      </div>
  )
}

export default BlogsSection