import { IPost, IPriceData, ISymbolData } from "@/bday";
import { getNeededInfo } from "./utils";

export async function getPricesData(): Promise<IPriceData | undefined> {
  try {
    const res = await fetch("https://abokifx.com/usd_to_ngn.json?days=30", {
      cache: "no-store",
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    // console.log({res})
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (err) {
    let error = err as { message: string };
    console.log(error?.message);
  }
}
export async function getParallelData(): Promise<{
  data: string;
  gon_response: string;
}> {
  const res = await fetch("https://abokifx.com/latest_lagos_parallel", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // console.log({res})
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getNgMarketData(): Promise<{
  top: ISymbolData[];
  bottom: ISymbolData[];
}> {
  const res1 = await fetch(
    "https://doclib.ngxgroup.com/REST/api/mrkstat/topsymbols",
    {
      next: {
        revalidate: 3600,
      },
    },
  );
  const res2 = await fetch(
    "https://doclib.ngxgroup.com/REST/api/mrkstat/bottomsymbols",
    {
      next: {
        revalidate: 3600,
      },
    },
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // console.log({res})
  if (!res1.ok || !res2.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return {
    top: await res1.json(),
    bottom: await res2.json(),
  };
}

export async function getMarketBlogData(): Promise<IPost[]> {
  const res = await fetch(
    "https://businessday.ng/wp-json/wp/v2/posts?categories=1045",
    { cache: "no-store" },
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data.map((articule: any) => getNeededInfo(articule));
}

export async function getTickerData(): Promise<IPriceData | undefined> {
  try {
    const res = await fetch("https://abokifx.com/usd_to_ngn.json?days=30", {
      cache: "no-store",
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    // console.log({res})
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (err) {
    let error = err as { message: string };
    console.log(error?.message);
  }
}
