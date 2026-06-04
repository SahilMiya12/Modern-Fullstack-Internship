'use server'
import {prisma} from '@/lib/prisma';
async function storeProducts(products: any){
    for(const product of products){
            await prisma.products.create({
                data:{
                    prod_name: product.title,
                    description: product.description, 
                    price: product.price 
                }
            })
        }
        const stored_data = await prisma.products.findMany();
        console.log("stored data: ", stored_data);
}

export async function getAllProducts(){
    const results = await prisma.products.findMany();
    return results;
}

export default storeProducts;