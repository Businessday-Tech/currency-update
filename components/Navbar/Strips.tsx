import React from "react";
import MarketsStrip from "./MarketsStrip";
import { getNgMarketData } from "@/utils/fetchers";

async function Strips() {
  const tickers = await getNgMarketData();
  return (
    <div>
      <MarketsStrip tickers={tickers} />
    </div>
  );
}

export default Strips;
