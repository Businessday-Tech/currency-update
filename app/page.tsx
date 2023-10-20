import { Container } from "@/components/Container";
import CurrencyConverter from "@/components/CurrencyConverter";
import ExchangeTable from "@/components/ExchangeTable";
import Navbar from "@/components/Navbar";
import { getParallelData } from "@/utils/fetchers";


export default async function Home() {
  const data = await getParallelData();
  
  return (
    <main className="">
           <Navbar /> 
           <Container>
           <CurrencyConverter data={data}/>            
           </Container>
           <ExchangeTable/>
    </main>
  )
}
