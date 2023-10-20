

export interface IPriceData { 
    usd: number[][];
    gbp: number[][];
    eur: number[][];
    cad: number[][];
    zar: number[][];
    aed: number[][];
    ghs: number[][];
    xaf: number[][];
    xof: number[][];
    cny: number[][];
    aud: number[][];
  }

  export interface ICountryData {
    alpha2: string;
    alpha3: string;
    countryCallingCodes: string[];
    currencies: string[];
    emoji: string;
    ioc: string;
    languages: string[];
    name: string;
    status: string;
}

  export interface ICurrencyData  {
    code: string,
    decimals: 2,
    name: string,
    number: string,
    symbol:string
   }

export interface IExchange{
  usd_buy_rate:number,
  gbp_buy_rate:number,
  eur_buy_rate:number,
  aed_buy_rate:number,
  aud_buy_rate:number,
  cad_buy_rate:number,
  cny_buy_rate:number,
  ghs_buy_rate:number,
  xaf_buy_rate:number,
  xof_buy_rate:number,
  zar_buy_rate:number,
}