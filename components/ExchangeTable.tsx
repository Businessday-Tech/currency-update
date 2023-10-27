const currencies = require('country-data-list').currencies
var lookup = require('country-data-list').lookup;
import React from 'react'
import { ICountryData, ICurrencyData, IPriceData } from '@/bday'
import Image from 'next/image';
import { currencyNames, getTableList, table1, table2, table3 } from '@/utils/utils';
import Box from './Box';


interface Props{
  data:IPriceData
}
//https://flagicons.lipis.dev/flags/4x3/us.svg
 const ExchangeTable = async ({data}:Props) => {

//    const data=Object.keys(data as IPriceData).reduce((acc,value)=>{
//     if(value){acc[value as keyof IPriceData]=data?.[value as keyof typeof  data].reverse()}
//     return acc
// },{} as IPriceData)
  const tableHeader1=Object.keys(data as IPriceData).map(value=>({currency:currencies[value.toUpperCase()] as ICurrencyData,lookup:lookup.countries({currencies: value.toUpperCase()})[0] as ICountryData})).filter(({currency})=>table1[currency.code.toLowerCase().trim() as keyof typeof table1])
  const tableHeader2=Object.keys(data as IPriceData).map(value=>({currency:currencies[value.toUpperCase()] as ICurrencyData,lookup:lookup.countries({currencies: value.toUpperCase()})[0] as ICountryData})).filter(({currency})=>table2[currency.code.toLowerCase().trim() as keyof typeof table2])
  const tableHeader3=Object.keys(data as IPriceData).map(value=>({currency:currencies[value.toUpperCase()] as ICurrencyData,lookup:lookup.countries({currencies: value.toUpperCase()})[0] as ICountryData})).filter(({currency})=>table3[currency.code.toLowerCase().trim() as keyof typeof table3])
  const tableCurrencies=Object.keys(data as IPriceData).map(value=>(lookup.countries({currencies: value.toUpperCase()})[0] as ICountryData))
  const lengths=Object.keys(data as IPriceData).map(value=>({[value]:data?.[value as keyof typeof  data].length}))
  //  console.log(JSON.stringify({tableHeader1,lengths},null,1))
const table1List=getTableList(data,table1,"usd",8)
const table2List=getTableList(data,table2,"cad",8)
const table3List=getTableList(data,table3,"ghs",8)

// console.log(JSON.stringify({table2List},null,1))

  return (
    <div>
            <Box data={data}/>
        <div className="px-4 mt-94 sm:px-6 lg:px-8">
      <div className="">
        <div className=" text-center">
          <h1 className="text-xl font-semibold text-gray-900">Parallel Rates (USD, EUR, GBP)</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>

      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 border-collapse">
                <thead className="bg-gray-50 ">
                  <tr className=' border border-slate-300'>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <p >
                     <span className=' text-center'>Nigerian Naira</span>
                     <span className=' text-center'>(Date) </span>    
                    </p>
                    </th>
                   {tableHeader1.map(({lookup,currency})=><th key={lookup.name} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border border-slate-300">
                    <p className=' flex flex-col md:flex-row items-center'>
                        <Image src={`https://flagicons.lipis.dev/flags/4x3/${currencyNames[currency.code.toLowerCase() as keyof typeof currencyNames].flag.toLowerCase()}.svg`} alt='' height={40} width={30}/>
                        <span className=' text-center'>{currency.code}</span><span className=' text-center'>({currency.symbol})</span>
                    </p>
                    <p className=''><span className=' text-red-600 font-bold'>BUY</span>/<span className=' text-green-600 font-bold'>SELL</span></p>
                    
                    </th>) }

                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {
                  table1List.map(({date,list},index) => (
                    <tr key={date}> 
                   <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 border border-slate-300">{date}</td>                       
                       {list.map(value=> <td key={value.sell} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6  border border-slate-300">
                      { value.buy}/{value.sell}**
                      </td>) }
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <h1 className="text-xl mt-10 font-semibold text-gray-900">Other Parallel Rates</h1>
        </div>
        <div className="mb-8 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300 border-collapse">
                <thead className="bg-gray-50 ">
                  <tr className=' border border-slate-300'>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <p >
                     <span className=' text-center'>Nigerian Naira</span>
                     <span className=' text-center'>(Date) </span>    
                    </p>
                    </th>
                   {tableHeader2.map(({lookup,currency})=><th key={lookup.name} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border border-slate-300">
                    <p className=' flex flex-col md:flex-row items-center'>
                        <Image src={`https://flagicons.lipis.dev/flags/4x3/${currencyNames[currency.code.toLowerCase() as keyof typeof currencyNames].flag.toLowerCase()}.svg`} alt='' height={40} width={30}/>
                        <span className=' text-center'>{currency.code}</span><span className=' text-center'>({currency.symbol})</span>
                    </p>
                    <p className=''><span className=' text-red-600 font-bold'>BUY</span>/<span className=' text-green-600 font-bold'>SELL</span></p>
                    </th>) }

                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {
                  table2List.map(({date,list},index) => (
                    <tr key={date}> 
                   <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 border border-slate-300">{date}</td>                       
                       {list.map(value=> <td key={value.sell} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6  border border-slate-300">
                      { value.buy}/{value.sell}**
                      </td>) }
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="my-8 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300 border-collapse">
                <thead className="bg-gray-50 ">
                  <tr className=' border border-slate-300'>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <p >
                     <span className=' text-center'>Nigerian Naira</span>
                     <span className=' text-center'>(Date) </span>    
                    </p>
                    </th>
                   {tableHeader3.map(({lookup,currency})=><th key={lookup.name} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border border-slate-300">
                    <p className=' flex flex-col md:flex-row items-center'>
                        <Image src={`https://flagicons.lipis.dev/flags/4x3/${currencyNames[currency.code.toLowerCase() as keyof typeof currencyNames].flag.toLowerCase()}.svg`} alt='' height={40} width={30}/>
                        <span className=' text-center'>{currency.code}</span><span className=' text-center'>({currency.symbol})</span>
                    </p>
                    <p className=''><span className=' text-red-600 font-bold'>BUY</span>/<span className=' text-green-600 font-bold'>SELL</span></p>
                    </th>) }

                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {
                  table3List.map(({date,list},index) => (
                    <tr key={date}> 
                   <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 border border-slate-300">{date}</td>                       
                       {list.map(value=> <td key={value.sell} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6  border border-slate-300">
                      { value.buy}/{value.sell}**
                      </td>) }
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ExchangeTable