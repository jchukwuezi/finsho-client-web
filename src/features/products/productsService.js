import axios from "axios";
import { mainStore } from "../../store/store"

const PRODUCT_INFO_API_URL = ''
const PRODUCTS_API_URL = ''
const PRODUCTS_ADD_API_URL = ''

const token = mainStore((state) => state.token);
const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

const getProducts = async () => {
    const response = await axios.get(PRODUCTS_API_URL, config)
    return response
}

const addProduct = async (productData) => {
    const reponse = await axios.post(PRODUCTS_ADD_API_URL, productData, config)
    return reponse
} 


const getProductInfo = async () => {
   const response = await axios.get(PRODUCT_INFO_API_URL, config)
   return response
}

const productsService = {
    getProducts,
    getProductInfo,
    addProduct
}


export default productsService

