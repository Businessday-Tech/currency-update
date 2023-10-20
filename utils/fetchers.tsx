import { IPriceData } from "@/bday"

export async function getPricesData(): Promise<IPriceData | undefined> {
    try{
         const res = await fetch('https://abokifx.com/usd_to_ngn.json?days=30',{cache: 'no-store'})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    // console.log({res})
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()   
    }catch(err){
        let error=err as {message:string}
        console.log(error?.message)
    }
  }
export async function getParallelData(): Promise<{data:string,gon_response:string}> {

         const res = await fetch('https://abokifx.com/latest_lagos_parallel',{cache: 'no-store'})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    // console.log({res})
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()   
  }

