import axios from 'axios';
import {
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL
} from './types';

import { PRODUCT_SERVER } from '../components/utils/misc';

export function getProductsByArrival() {
    //By ARRIVAL
    // /articles?sortBy=createdAt&order=desc&limit=4
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
    .then(response => response.data);
    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: request
    }
}

export function getProductsBySell() {

    //By SOLD
    // /articles?sortBy=sold&order=desc&limit=100
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=100`)
    .then(response => response.data)
    return {
        type: GET_PRODUCTS_BY_SELL,
        payload: request
    }
}