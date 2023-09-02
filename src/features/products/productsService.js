import axios from "axios";

const PRODUCT_INFO_API_URL = ''
const PRODUCTS_API_URL = ''
const PRODUCTS_ADD_API_URL = 'http://localhost:4000/api/products/create'


const getProducts = async (token) => {
    const config = {
        headers: {
           Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(PRODUCTS_API_URL, config)
    return response
}

const addProduct = async (token, productData) => {
    const config = {
        headers: {
           Authorization: `Bearer ${token}`
        }
    }
    const reponse = await axios.post(PRODUCTS_ADD_API_URL, productData, config)
    return reponse
} 


const getProductInfo = async (token) => {
    const config = {
        headers: {
           Authorization: `Bearer ${token}`
        }
    }
   const response = await axios.get(PRODUCT_INFO_API_URL, config)
   return response
}

const productsService = {
    getProducts,
    getProductInfo,
    addProduct
}


export default productsService

