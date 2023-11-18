import { IPriceData } from "@/bday";
import BlogsSection from "@/components/BlogsSection";
import { Container } from "@/components/Container";
import CurrencyConverter from "@/components/CurrencyConverter";
import ExchangeTable from "@/components/ExchangeTable";
import Footer from "@/components/Footer";
import MixBlock from "@/components/MixBlock";
import Navbar from "@/components/Navbar";
import {
  getMarketBlogData,
  getParallelData,
  getPricesData,
} from "@/utils/fetchers";

export default async function Home() {
  const blogData = await getMarketBlogData();
  const data = (await getPricesData()) as IPriceData;

  const converter = Object.keys(data as IPriceData).reduce(
    (acc, value) => {
      if (value) {
        acc[value as keyof IPriceData] = data?.[value as keyof typeof data]
          .reverse()
          .find((value) => value[1] > 27)?.[1] as number;
      }
      return acc;
    },
    {} as { [K: string]: number }
  );

  const blogDataRefined = blogData.map((x, i) => ({ ...x, isLive: i === 0 }));
  return (
    <main className="">
      <Navbar />
      <div className=" flex">
        <div className="w-full md:w-9/12">
          <CurrencyConverter data={converter} />
          <div className=" block md:hidden">
            <MixBlock
              title="Market News"
              mobile
              data={blogDataRefined.slice(0, 3)}
            />
          </div>
          <ExchangeTable data={data} />
        </div>
        <div className=" flex-1 hidden md:block">
          <BlogsSection data={blogDataRefined.slice(0, 5)} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
