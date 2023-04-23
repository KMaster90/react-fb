import clsx from "clsx";
import {useCheckout} from "@/pages";

export const CheckoutPage = () => {
    const {validators, user, actions, totalCartCost, dirty} = useCheckout();
    return (
        <div className="max-w-sm mx-auto">
            <h1 className="title">CHECKOUT</h1>
            
            <div className="text-xl my-3 border-b">€ {totalCartCost}</div>
            
            <form className="flex flex-col gap-3" onSubmit={actions.sendOrder}>
                Your name:
                <input
                    type="text" placeholder="your name"
                    name="name"
                    value={user.name}
                    onChange={actions.changeHandler}
                    className={clsx({error: !validators.isNameValid&&dirty})}
                />
                
                Your email
                <input
                    type="email" placeholder="Your email"
                    name="email"
                    value={user.email}
                    onChange={actions.changeHandler}
                    className={clsx({error: !validators.isEmailValid&&dirty})}
                />
                
                <button type="submit" className={clsx("btn",{primary: !validators.isFormValid,success:validators.isFormValid})} disabled={!validators.isFormValid}>
                    CONFIRM ORDER
                </button>
            </form>
            
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}
