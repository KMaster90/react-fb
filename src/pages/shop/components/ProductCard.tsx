import {Product} from "@/model";

interface ProductCartProps {
    product:Partial<Product>,
    onAddToCart:()=>void
}

export const ProductCard = ({product,onAddToCart}: ProductCartProps) => {
    return (
        <div className="bg-white text-black rounded-xl shadow-2xl overflow-hidden">
            {product.img && <img src={product.img} alt={product.name} className="h-64 w-full object-cover"/>}
            <div className="flex justify-between items-center gap-3 p-3 text-2xl font-bold">
                <div>{product.name}</div>
                <div>€ {product.cost}</div>
            </div>
            
            <p className="p-3">{product.description}</p>
            <button className="text-white bg-sky-600 hover:bg-slate-400 transition w-full text-center font-bold p-3" onClick={onAddToCart}>Add to Cart</button>
        </div>
    )
}
