import axios from "axios";

export const  coingiko=axios.create({

    baseURL:'https://api.coingecko.com/api/v3'
});

