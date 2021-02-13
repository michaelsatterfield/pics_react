import axios from "axios";
import config from "../config";

const accessKey = config.access_key;


//  use async keyword and await keyword and variable
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:
            'Client-ID ' + accessKey
    }
})
