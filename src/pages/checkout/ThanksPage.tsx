import {NavLink} from "react-router-dom";

export const ThanksPage = () => {
    return (
        <div>
            <div className="text-3xl text-center">Thank you your order</div>
            
            <div className="flex justify-center mt-12">
                <NavLink to="/catalog" className="btn primary">Back to Shop</NavLink>
            </div>
        </div>
    )
}
