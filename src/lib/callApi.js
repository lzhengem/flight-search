import axios from "axios";

const client = axios.create();

export function apiGet(url){
    return client.get(url)
}