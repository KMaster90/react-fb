import {useEffect, useState} from "react";
import {pb} from "@/pocketbase";
import {Product} from "@/model";
import {ProductCard} from "@/pages";
import {useCartPanel, useCart, openOverlaySelector, addToCartSelector} from "@/services";
import {ServerError, Spinner} from "@/shared";

export const ShopPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [pending, setPending] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    
    const openCartPanel = useCartPanel(openOverlaySelector);
    const addToCart = useCart(addToCartSelector);
    
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
    
    const addToCartHandler = (product: Product) => {
        openCartPanel();
        addToCart(product);
    }
    
    return (
        <div>
            <h1 className="title">ShopPage</h1>
            {pending && <Spinner/>}
            {error && <ServerError/>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                {products.map(product =>
                    <ProductCard key={product.id} product={product} onAddToCart={() => addToCartHandler(product)}/>
                )}</div>
        </div>
    )
}
