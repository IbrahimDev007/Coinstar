import React,{createContext, useContext,useState} from "react";
export const Watchlist =createContext();
export const WatchlistProvider=({children})=>
{
    const [watchlist, setwatchlist] = useState(["bitcoin","ethereum","cardano","ripple","tether"])
   
   return(<Watchlist.Provider value={watchlist}>
        {children}
    </Watchlist.Provider>)
}
