import {React , useId} from "react";


function InputBox({
    label,amount , 
    onAmountChange , 
    onCurrencyChange
    ,currencyOptions = [] ,
    selectCurrency ="usd" ,
    amountDisable = false ,
    currencyDisable = false , 
    
    className = "",
}) {
    const uniqueIdGenerator = useId() ; 
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor = {uniqueIdGenerator} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={uniqueIdGenerator}
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // Add onChange handler
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency }
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    
                >
                    {currencyOptions.map((element) => (
                        <option key={element} value={element}>
                            {element}
                        </option>
                    ) )}
                    
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
