import { Watchlist } from "../Context/WatchlistContext";
import React, { useContext, useEffect, useState } from "react";
import { coingiko } from "../apis/api";
import Coin from "./Coin";

export default function CoinList() {
	const [coins, setcoins] = useState([]);
    const [isloading, setisloading] = useState(true)
    const value =useContext(Watchlist);
	useEffect(() => {
		const fetchdata = async () => {
			const response = await coingiko
				.get("/coins/markets", {
					params: {
						vs_currency: "usd",
						ids:String(value)  
					},
				})
				.then((res) => setcoins(res.data))           
		};
        setisloading(false); 
        fetchdata();
        console.log(coins);
       
	}, []);
    const renderCoins=()=>{
        if(isloading)
        return<div>Loading....</div>
    }
 
	return <div>
        <ul className="coinlist list-group mt-2">
        {coins.map((coin)=>
         <Coin coin={coin} />)
    }
    </ul></div>;
}
