import { useState, useEffect } from "react";

type Product = {
    id: number,
    title: string,
    category: string,
    price: number
};

function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    function getUsers() {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log("data:", data);
                setProducts(data.products);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    }
    useEffect(() => {
        getUsers();
    }, []);
    if (isLoading) {
        return <h1>Data is Loading...</h1>;
    }
    if (error) {
        return <h1>Error fetching the data</h1>;
    }
    return (
        <>
            {
                products.map((product: Product) => {
                    return (
                        <div key={product.id}>
                            <h2>{product.title}</h2>
                            <p>Category: {product.category}</p>
                            <p>Price: ${product.price}</p>
                            <hr />
                        </div>
                    );
                })
            }
        </>
    );
}

export default Products;