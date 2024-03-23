import { useState } from "react";
import img from "../assets/bg.jpg";
import InputBox from "./InputBox";
import UseCurrencyInfo from "../hooks/UseCurrencyInfo";

export const Card = () => {
  const [amount,setAmount]=useState(0);
    const [form,setForm]=useState('usd');
    const [to,setTo]=useState('bdt');
    const [convertedAmount,setConvertedAmount]=useState(0);
    const currencyInfo=UseCurrencyInfo(form);
    const options=Object.keys(currencyInfo);
    const swap=()=>{
        setForm(to);
        setTo(form);
        setConvertedAmount(amount);
        setAmount(convertedAmount)
    }
    
  const convert=()=> setConvertedAmount(amount*currencyInfo[to])
  return (
    <div className="">
      <div className="card w-3/4 mx-auto glass">
        <figure>
          <img className="w-2/6 rounded-2xl" src={img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center p-0 text-blue-600">
            Currency Converter
          </h2>
         
          <div className="flex flex-col justify-between items-center relative">
            {/* <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-emerald-900">
                  From
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full h-16"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-emerald-900">
                  To
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full h-16"
              />
            </label> */}
             <form className="w-full" onSubmit={(e) => { e.preventDefault();convert();}}> <div className="w-full mb-1">
              <InputBox className="w-full" label="From" amount={amount} currencyOptions={options} onCurrencyChange={(currency)=>{setAmount(amount)}} selectCurrency={form} onAmountChange={(amount)=>{setAmount(amount)}}/>
            </div> 
           
            
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency)=>{setTo(currency)}} selectCurrency={to} amountDisabled/>
            </div>
            </form>
            <button onClick={swap} className="btn btn-primary absolute left-[45%] bottom-[40%]">
              swap
            </button>
          </div>
          <form/>
          <div className="card-actions items-center justify-center py-3">
            <button onClick={convert} className="btn btn-primary">Convert{form.toLocaleUpperCase()} to {to.toLocaleUpperCase()}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
