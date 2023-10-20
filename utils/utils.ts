export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

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
