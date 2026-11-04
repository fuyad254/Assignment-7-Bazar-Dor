import React from 'react';
import ProductCard from './productCard';
import { IProduct } from '@/type/product';
import { IProducts } from '@/type/products';

const AllProduct = async() => {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const allProduct = await res.json()

    const risers = allProduct.filter(product=> product.change?.dir=="up").sort((a, b) => (b.change?.pct ) - (a.change?.pct ))
        .slice(0, 6)
        
        const fallers = allProduct.filter(product=> product.change?.dir=="down").sort((a, b) => (b.change?.pct ) - (a.change?.pct ))
            .slice(0, 6)
    

    
    return (
        <>
        
        {fallers.map((product:IProducts)=> <ProductCard key={product.id} product={product} ></ProductCard>)}
        {risers.map((product:IProducts)=> <ProductCard key={product.id} product={product} ></ProductCard>)}
        {allProduct.map((product:IProducts)=> <ProductCard key={product.id} product={product} ></ProductCard>)}


        </>
    );
};

export default AllProduct;