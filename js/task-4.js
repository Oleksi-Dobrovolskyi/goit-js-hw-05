function getShippingCost(country) {
    let price;


    switch (country) {
        case 'Australia': price = 170;
            return `Shipping to ${country} will cost ${price} credits`;
            
        case `Germany`:
            return `Sorry, there is no delivery to your country`;
            
        case `China`: price = 100;
            return `Shipping to ${country} will cost ${price} credits`;
            
        case `Chilie`: price = 250;
            return `Shipping to ${country} will cost ${price} credits`;
            
        case `Jamaica`: price = 120;
            return `Shipping to ${country} will cost ${price} credits`;
            
        case `Sweden`:
            return `Sorry, there is no delivery to your country`;

    
        default: return `Sorry, there is no delivery to your country`;
            
    }
}
  
console.log(getShippingCost('Australia')); 
console.log(getShippingCost('Germany'));  
console.log(getShippingCost('China'));     
console.log(getShippingCost('Chilie'));    
console.log(getShippingCost('Jamaica'));   
console.log(getShippingCost('Sweden'));

