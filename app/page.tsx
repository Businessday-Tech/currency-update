import BlogsSection from "@/components/BlogsSection";
import { Container } from "@/components/Container";
import CurrencyConverter from "@/components/CurrencyConverter";
import ExchangeTable from "@/components/ExchangeTable";
import Footer from "@/components/Footer";
import MixBlock from "@/components/MixBlock";
import Navbar from "@/components/Navbar";
import { getMarketBlogData, getParallelData } from "@/utils/fetchers";


export default async function Home() {
  const data = await getParallelData();
  const blogData = await getMarketBlogData();
  const blogDataRefined=blogData.map((x,i)=>({...x,  isLive:i===0}))
  return (
    <main className="">
      <Navbar /> 
      <div className=" flex">
      <div className="w-full md:w-9/12">
           <CurrencyConverter data={data}/>  
           <div className=" block md:hidden">
             <MixBlock title="Market News" mobile data={blogDataRefined.slice(0,3)}/> 
            </div> 
                  
           <ExchangeTable/>
      </div>
      <div className=" flex-1 hidden md:block">
<BlogsSection data={blogDataRefined}/>
      </div>

      </div>

           <Footer/>           

    </main>
  )
}
