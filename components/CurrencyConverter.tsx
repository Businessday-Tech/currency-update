"use client";
import { IExchange, IPriceData } from '@/bday';
import { currencyNames } from '@/utils/utils';
import Image from 'next/image';
import Script from 'next/script';
import numeral from 'numeral';
import React,{useEffect,useRef,useState} from 'react'

const CurrencyConverter = ({data}:{data:{data:string,gon_response:string}}) => {
    const [rates, setRates] = useState< {[K:string]:number}>()
    const [selected,SetSelected]=useState("usd")
    const othersRef=useRef<HTMLInputElement>(null)
    const [currencies,setCurrencies]=useState({
        naira:"",
        others:""
    })
    console.log({data,rates})

    const handleValuesChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setCurrencies((x)=>{
            if(name==="naira"){
                let otherValue=(parseFloat(value)/rates![selected])??""
                return ({others:numeral(otherValue).format("0.00"),[name]:value})
            }else{
                let nairaValue=(parseFloat(value)*rates![selected])??""
                return ({...x,naira:numeral(nairaValue).format("0.00"),[name]:value})
            }
            
        })
    }
    const handleSelect=(e:React.ChangeEvent<HTMLSelectElement>)=>{
            SetSelected(e.target.value)
            console.log({othersRef})
                    setCurrencies((x)=>{
                let nairaValue=(parseFloat(othersRef.current?.value??"0")*rates![e.target.value])??""
                console.log({nairaValue})
                return ({...x,naira:numeral(nairaValue).format("0.00")})
        })
    }
    useEffect(() => {
      const formattedRates=  Object.keys((window as unknown as {gon:IExchange}).gon).reduce((acc,value)=>{
            const realValue=value.substring(0,3)
                acc[realValue as keyof IPriceData]=(window as unknown as {gon:IExchange}).gon[value as keyof IExchange]
                return acc
        },

       {} as {[K:string]:number} )
     setRates(formattedRates) 
    }, [])
    
  return (
    <>    <div>
        <div className="border border-slate-200 rounded-xl shadow-2xl h-max mt-10 px-5 sm:px-14 py-20 pb-12">
            <small className="font-lato text-[14px]">Exchange rates can fluctuate frequently and can vary between financial institutions. Always verify rates with official sources before making any financial decisions</small>
            <div className="flex flex-col sm:flex-row items-center justify-between mt-10 relative">
                <div className="flex items-center justify-center border border-[#cdcdcd] w-full sm:w-0 basis-[100%] sm:basis-[45%] h-[92.98px] py-8 sm:py-0 px-4 mb-5 sm:mb-0">
                    <div className="flex flex-col items-start justify-center gap-4 w-full">
                        <label htmlFor="Amount" className="font-lato text-[14px]">Amount</label>
                    <input name='naira' type="number" value={currencies.naira} onChange={handleValuesChange} placeholder="Amount" className="placeholder:font-lato placeholder:text-[14px] font-bold border-0 pl-2 focus:outline-none focus:ring-0 focus:border-b focus:border-b-[#F91212] mt-1 w-full sm:w-auto"/>
                        </div>
                        <div className="flex flex-col items-end justify-between gap-4 font-lato text-[14px] w-full">
                            <label htmlFor="Currency" className="font-lato text-[14px]">Currency</label>
                            <div className='flex'>
                            <Image src={`https://flagicons.lipis.dev/flags/4x3/ng.svg`} alt='' height={40} width={30}/>
                                                           <select id="firstSelect" className="bg-white text-[14px] rounded p-2" >
                                <option value="NGN" className="font-lato text-[14px]">NGN</option>
                                </select> 
                            </div>

                                </div>
                            </div>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" 
                                className="basis-[10%] text-3xl mb-5 sm:mb-0" 
                                height="1em" width="1em" 
                                xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.924 10.383a1 1 0 0 0-.217-1.09l-5-5-1.414 1.414L16.586 9H4v2h15a1 1 0 0 0 .924-.617zM4.076 13.617a1 1 0 0 0 .217 1.09l5 5 1.414-1.414L7.414 15H20v-2H5a.999.999 0 0 0-.924.617z"></path>
                                 </svg>
                                <div className="flex items-center justify-center border border-[#cdcdcd] w-full sm:w-0 basis-[100%] sm:basis-[45%] h-[92.98px] py-8 sm:py-0 px-4 mb-1 sm:mb-0">
                                    <div className="flex flex-col items-start justify-center gap-4 w-full">
                                        <label htmlFor="Amount" className="font-lato text-[14px]">Amount</label>
                                        <input ref={othersRef} name='others' type="number" onChange={handleValuesChange} value={currencies.others} placeholder="Amount" className="placeholder:font-lato placeholder:text-[14px] font-bold border-0 pl-0 focus:outline-none focus:ring-0 focus:border-b focus:border-b-[#F91212] mt-1 w-full sm:w-auto" />
                                        </div>
                                        <div className="flex flex-col items-end justify-between gap-4 font-lato text-[14px] w-full">
                                            <label htmlFor="Currency" className="font-lato text-[14px]">Currency</label>
                                            <div className=' flex'>
                                            <Image src={`https://flagicons.lipis.dev/flags/4x3/${currencyNames[selected as keyof typeof currencyNames].flag.toLowerCase()}.svg`} alt='' height={40} width={30}/>
                                                                                        <select id="secondSelect" value={selected} onChange={handleSelect} className="bg-white text-[14px] rounded p-2">
                                            {!!rates&&Object.keys(rates).map(rate=><option key={rate} value={rate} className="font-lato text-[14px]">{rate.toUpperCase()}</option>)}
                                            </select>    
                                            </div>

                                            </div>
                                            </div>
                                            </div>
                                            <div className=''>
                                            <button className="bg-[#F91212] hover-bg-[#F91212]/80 transition-all duration-150 ease-linear text-white w-[300px] h-[50px] text-base rounded-md mt-20">Clear</button>

                                            </div>
                                            </div>
    </div>
     <Script id="my-script">
        {data.gon_response}
        </Script>   
    </>


  )
}

export default CurrencyConverter