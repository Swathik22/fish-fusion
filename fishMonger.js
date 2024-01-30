const { boatInventory } = require("./fishingBoat.js")

/*Function to get the fist inventory from boat to monger( mongerInventory())
    //--------Monger constraints for purchasing-----------
        /*
            1)check if fishingBoat has 10 fishes->
                //===10 then purchase
                    2)// if price is >7.50 per fish 
                        --yes--purchase
                            
                    --No Purchase
            
                //No Purchase  
        */
//return array of fishes if purchased else return empty array

//----------Chef purchasing constrains-----
//function with parameter to let the chef decide price per fish to purchase
    //check for all the fishes for which price <=$5.00

//return fish with price <==$5.00

//final mongerInventory should be exported

const fishMongerBuy = (boatInventoryFunction) => {
    let emptyArray = [];
    for (const fishListings of boatInventoryFunction) {
      if (fishListings.amount >= 10 && fishListings.price <= 7.5) {
        emptyArray.push(fishListings);
      }
    }
    return emptyArray;
  };
  
  const test = fishMongerBuy(boatInventory());
  console.log(test);
  
  const chefBoyardieBuy = (price) => {
    const fishMongerBoughtFish = fishMongerBuy(boatInventory());
    let chefBoughtFish = [];
    for (const fishArray of fishMongerBoughtFish) {
      if (fishArray.price <= price) {
        chefBoughtFish.push(fishArray);
      }
    }
    return chefBoughtFish;
  };