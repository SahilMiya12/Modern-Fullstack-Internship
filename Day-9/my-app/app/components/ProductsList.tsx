'use client'
import storeProducts from "../actions/storeProducts";
import { getAllProducts } from "../actions/storeProducts";
import { useEffect, useState } from "react";

export default function ProductsList(){
    const [products, setProducts] = useState([]);
    async function fetchProducts(){
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            storeProducts(data);
            const output:any = await getAllProducts();
            setProducts(output);
            console.log("Hey: ", products);
        }catch(error){
            console.log("Error fetching the products");
        }
    }
      

    useEffect(() => {
        fetchProducts();
    }, []);

    
    return (
        <>
        <h1>All Products:</h1>
        {
            products.map((product:any) => (
                <div key={product.id} style={{display:"flex", width:"auto", height: "auto", gap:"15px", border:"2px solid black"}}>
                    <h2>{product.prod_name}</h2>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            ))
        }
        </>
    )
}