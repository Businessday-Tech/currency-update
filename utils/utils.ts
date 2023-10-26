import { IPost, IPriceData } from "@/bday";
import { format } from "date-fns";

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}
export const getNeededInfo = (article:any):IPost => {
  const { id, date, content, excerpt, slug, title, status, type, yoast_head_json,link } =
    article;
  return ({
    id,
    date,
    content: content.rendered,
    excerpt:
      excerpt.rendered.substring(0, excerpt.rendered.length - 15) + "...</p>",
    slug,
    title: title.rendered,
    status,
    link,
    type,
    image: yoast_head_json.og_image[0].url,
    author:yoast_head_json.author
  });
};

export function shuffle<T>(array:T[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  export let currencyNames= { 
    usd: {
      name:"United States dollar",
      flag:"US"
    },
    gbp: {
      name:"Pound sterling",
      flag:"US"
    },
    eur: {
      name:"Euro",
      flag:"EU"
    },
    cad: {
      name:"Canadian dollar",
      flag:"CA"
    },
    zar: {
      name:"South African rand",
      flag:"ZA"
    },
    aed: {
      name:"United Arab Emirates dirham",
      flag:"AE"
    },
    ghs: {
      name:"Ghanaian Cedi",
      flag:"GH"

    },
    xaf: {
      name:"CFA franc BEAC",     
       flag:"CF"
    },
    xof: {
      name:"CFA franc BCEAO",
      flag:"SN"
    },
    cny: {
      name:"Chinese Yuan",
      flag:"CN"
    },
    aud: {
      name:"Australian Dollar",
      flag:"AU"
    },
  }

  
export const table1={
  usd: {
    name:"United States dollar",
    flag:"US"
  },
  gbp: {
    name:"Pound sterling",
    flag:"US"
  },
  eur: {
    name:"Euro",
    flag:"EU"
  },
}

//  [
//   {
//    "usd": 62
//   },
//   {
//    "gbp": 62
//   },
//   {
//    "eur": 62
//   },
//   {
//    "cad": 41
//   },
//   {
//    "zar": 41
//   },
//   {
//    "aed": 41
//   },
//   {
//    "ghs": 23
//   },
//   {
//    "xaf": 23
//   },
//   {
//    "xof": 23
//   },
//   {
//    "cny": 41
//   },
//   {
//    "aud": 41
//   }
//  ]

export const table2={
  cad: {
    name:"Canadian dollar",
    flag:"CA"
  },
  zar: {
    name:"South African rand",
    flag:"ZA"
  },
  aed: {
    name:"United Arab Emirates dirham",
    flag:"AE"
  },  
  cny: {
    name:"Chinese Yuan",
    flag:"CN"
  },
  aud: {
    name:"Australian Dollar",
    flag:"AU"
  },
}

export const table3={
  ghs: {
    name:"Ghanaian Cedi",
    flag:"GH"
  },
  xaf: {
    name:"CFA franc BEAC",     
     flag:"CF"
  },
  xof: {
    name:"CFA franc BCEAO",
    flag:"SN"
  },
}


export const getTableList=(currencyList:IPriceData,table:typeof table1|typeof table2|typeof table3,leadCurrency:keyof IPriceData,lastIndex:number)=>{
  const last=lastIndex??currencyList[leadCurrency].length
  const set=new Set()
   return currencyList?.[leadCurrency].slice(0,last).map((mydata,index) => {
      return({
        date:format(new Date(currencyList[leadCurrency][index]?.[0]), "dd/MM/yyyy"),
        list:  Object.keys(currencyList as IPriceData).filter((stats)=>table[stats as keyof typeof table]).map(value=> currencyList[value as keyof typeof  currencyList][index]?.[1])
      })
    }   
    ).filter(newStats=>{
      
      const hasValue=set.has(newStats.date)
      set.add(newStats.date)
      return !hasValue && !(newStats.list.some((x)=>x<=27))
    })
}