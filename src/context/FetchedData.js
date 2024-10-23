import React, { createContext, useState,useEffect } from 'react'
import ApiData from '../GlobalData/ApiData';
import axios from 'axios';



export const FetchedData = createContext();

export default function FetchCategories({children}) {
    const[categories,setCategories]=useState();
    const [products, setproducts] = useState([])
    // function to fetch categories
    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${ApiData.url}wp-json/wc/v3/products/categories`, {
                auth: {
                    username: `${ApiData.Consumerkey}`,
                    password: `${ApiData.Consumersecret}`,
                },
            });
            setCategories(response.data)

        } catch (error) {
            console.log('the error is ' + error)
        }
    }
    useEffect(() => {
        fetchCategories()
    }, [])




   

    const fetchproducts = async () => {
        try {
            const response = await axios.get(`${ApiData.url}wp-json/wc/v3/products`, {
                auth: {
                    username: `${ApiData.Consumerkey}`,
                    password: `${ApiData.Consumersecret}`,
                },
            });
            setproducts(response.data)
        } catch (error) {
            console.log(error + 'products error')
        }
    }
    useEffect(() => {
        fetchproducts()
    }, [])


  return (
     <FetchedData.Provider value={{categories,setCategories,products}}>
       {children}
     </FetchedData.Provider>
  )
}


