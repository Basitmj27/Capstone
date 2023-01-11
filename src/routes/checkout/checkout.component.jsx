
import {CartContext} from "../../contexts/cart.context";
import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss"

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span className="name">Product</span>
                </div>
                <div className="header-block">
                    <span className="name">Description</span>
                </div>
                <div className="header-block">
                    <span className="name">Quantity</span>
                </div>
                <div className="header-block">
                    <span className="name">Price</span>
                </div>
                <div className="header-block">
                    <span className="name">Remove</span>
                </div>
            </div>
            
            {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <span className="total">Total: ${cartTotal}</span>
            
        </div>
    );
}

export default Checkout;