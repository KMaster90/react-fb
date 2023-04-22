import {Product} from "@/model";
import {useEffect, useState} from "react";
import {pb} from "@/pocketbase";
import {ProductCard} from "@/pages";
import {ServerError, Spinner} from "@/shared";
import {useCartPanel} from "@/services";

export const ShopPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const openCartPanel = useCartPanel(({openOverlay})=>openOverlay)
    
    useEffect(() => loadData(), [])
    
    const loadData = () => {
        setError(false);
        setPending(true);
        pb.collection('products').getList<Product>()
            .then(listResults => {
                setProducts(listResults.items);
            })
            .catch(_=>setError(true))
            .finally(()=>setPending(false))
    }
    
    const addToCart = (product: Partial<Product>) => {
        console.log(product);
        openCartPanel();
    }
    
    return (
        <div>
            <h1 className="title">ShopPage</h1>
            {pending && <Spinner/>}
            {error && <ServerError/>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                {products.map(product =>
                    <ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product)}/>
                )}</div>
            <button className="btn rounded bg-red-800" onClick={loadData}>Load Data</button>
        </div>
    )
}
