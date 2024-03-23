import { useEffect } from "react";
import { useState } from "react";


const UseCurrencyInfo = (currency) => {
    const [data,setData]=useState();
    let url = ``

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setData(data))
    },[])
    
};
  
























export default UseCurrencyInfo;