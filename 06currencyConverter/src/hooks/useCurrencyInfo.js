import { useEffect, useState} from 'react'
// In this we are calling API
function useCurrencyInfo(currency)
{
    const [data,setData]= useState({})
   useEffect(()=>{
    
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
    .then((response)=>response.json())
    .then((response)=> setData(response[currency]))

   },

   [currency])

    console.log(data)
   return data;
   // we are saving response in 'data' and returning it. 
}

export default useCurrencyInfo;

 
/* API example -
{
	"date": "2025-05-24",
	"usd": {
		"1inch": 4.41813378,
		"aave": 0.0039488402,
		"ada": 1.33199428,
		"aed": 3.6725,
		"afn": 69.93547006,
		"agix": 2.68191655,
		"akt": 0.65815902,
		"algo": 4.44872818,
          }
 }
 */