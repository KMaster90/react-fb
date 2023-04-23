import {NavLink} from "react-router-dom";
import {selectCartIsEmpty, selectCartList, selectTotalCartCost, useCart} from "@/services";

export const CartPage = () => {
    const list = useCart(selectCartList);
    const totalCost = useCart(selectTotalCartCost);
    const isEmpty = useCart(selectCartIsEmpty);
    
    const decreaseQty = useCart(({decreaseQuantity}) => decreaseQuantity);
    const increaseQty = useCart(({increaseQuantity}) => increaseQuantity);
    
    return (
        <div>
            <h1 className="title">CART</h1>
            
            <ul>
                {
                    list.map(({product, qty}) => (
                        <li
                            key={product.id}
                            className="flex flex-col sm:flex-row justify-between items-center gap-3  border-b border-blue-400 py-3"
                        >
                            <div className="flex items-center gap-3">
                                <img src={product.tmb} alt={product.name} className="w-24 rounded-xl"/>
                                <div className="font-bold">{product.name}</div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <div className="flex items-center gap-3">
                                    <button className="btn primary" onClick={() => decreaseQty(product.id)}>-</button>
                                    <div>qty: {qty}</div>
                                    <button className="btn primary" onClick={() => increaseQty(product.id)}>+</button>
                                </div>
                                
                                <div className="w-16 text-center">
                                    € {product.cost * qty}
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            
            <div className="text-4xl text-right my-4 mr-4">
                Total: € {totalCost}
            </div>
            
            {
                !isEmpty &&
                <div className="flex justify-center">
                    <NavLink to="/checkout" className="btn primary lg">Confirm order</NavLink>
                </div>
            }
        </div>
    )
}
