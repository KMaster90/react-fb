import {useNavigate} from "react-router-dom";
import {closeOverlaySelector, selectCartList, selectTotalCartCost, useCart, useCartPanel} from "@/services";

export function CartPanel() {
    const navigate = useNavigate();
    
    const closeCartPanel = useCartPanel(closeOverlaySelector);
    const list = useCart(selectCartList);
    
    const gotoCart = () => {
        navigate('/cart');
        closeCartPanel();
    };
    
    return (
        <div className="fixed bg-slate-800 right-4 top-24 p-3 rounded-xl shadow-2xl w-96">
            <ul className="flex flex-col gap-4">
                {list.map(({product,qty}) =>
                    <li key={product.id} className="flex justify-between items-center border-b border-slate-600 pb-3">
                        <div>{product.name}</div>
                        <div className="flex gap-3">
                            <div>({`${qty} x € ${product.cost}`})</div>
                            <div>€ {qty*product.cost}</div>
                        </div>
                    </li>
                )}
            </ul>
            
            <div className="flex justify-end text-xl font-bold my-3">
                Total: € {useCart(selectTotalCartCost)}
            </div>
            
            <div className="flex justify-center">
                <button className="btn primary" onClick={gotoCart}>Go to Cart</button>
            </div>
        </div>
    )
}
