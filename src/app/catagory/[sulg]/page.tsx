import ProductCard from '@/component/productCard';
import { IProducts } from '@/type/products';
import React from 'react';


const page = async({ params }: { params: Promise<{ sulg: string }> }) => {
    const { sulg } = await params;
    
    const res= await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${sulg}`)
    const products= await res.json()
    

    return (
        <div>
            {products.map((product:IProducts ,ind:number)=> <ProductCard product={product} key={ind}/>)}
        </div>
    );
};

export default page;