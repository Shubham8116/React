/* we have not defined onAmountChange as function we have declared only name of it, therefore we are writing &&.
 This ensures that the function onAmountChange is only called if it is defined, preventing potential runtime errors from trying to invoke an undefined function.
 If it is defined then it will run or will not show errors*/

import React, { useId } from 'react'


function InputBox ({

    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    amountDisable=false,
    currencyDisable=false,
    selectCurrency="usd",
    currencyOptions=[],

            })
     
    
{
    const amountInputId=useId();
    return(
        <div className="bg-white p-3 rounded-lg text-sm flex">

        <div className="w-1/2">
            <label htmlFor={amountInputId} className="text-black/40 mb-2 mr-40 inline-block">
                {label}
            </label>
            <input
                id={amountInputId}
                className="outline-none w-full bg-transparent py-1.5"
                type="number"
                placeholder="Amount"
                value={amount}
                disabled={amountDisable}
                onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            />  
        </div>


        <div className="w-1/2 flex flex-wrap justify-end text-right">

            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                
            value={selectCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}>
                
                  {
                    currencyOptions.map((currency)=>
                        (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                        ) )
                  }
            
            </select>
        </div>


    </div>

    )
}

export default InputBox;